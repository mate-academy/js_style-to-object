'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitArr = sourceString.split(';');
  const object = {};
  const newArr = [];
  const alphabet = 'abcdefghijklmnopqrstuvwxyz-1234567890#%()';

  splitArr.forEach((element) => {
    newArr.push(element.split(':'));
  });

  for (const key of newArr) {
    if (key.length === 1) {
      continue;
    }

    let value = key[1];
    let property = key[0].split(' ').join('').split('\n').join('');

    while (!alphabet.includes(value[value.length - 1])) {
      value = value.slice(0, value.length - 1);
    }

    while (!alphabet.includes(value[0])) {
      value = value.slice(1);
    }

    while (!alphabet.includes(property[property.length - 1])) {
      property = property.slice(0, property.length - 1);
    }

    while (!alphabet.includes(property[0])) {
      property = property.slice(1);
    }
    object[property] = value;
  }

  return object;
}

module.exports = convertToObject;
