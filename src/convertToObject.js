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

  splitArr.forEach((element) => {
    newArr.push(element.split(':'));
  });

  for (const key of newArr) {
    if (key.length === 1) {
      continue;
    }

    const value = key[1].trim();
    const property = key[0].split(' ').join('').split('\n').join('').trim();

    object[property] = value;
  }

  return object;
}

module.exports = convertToObject;
