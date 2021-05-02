'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split(' ');
  const result = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '') {
      arr.splice(i, 1);
      i--;
    }
  }

  const str = arr.join(' ');
  const obj = str.split(';');
  const key = [];

  for (let i = 0; i < obj.length; i++) {
    key.push(obj[i].split(':'));
  }

  for (let i = 0; i < key.length; i++) {
    if (key[i][1] === undefined) {
      key.splice(i, 1);
      i--;
    }

    result[key[i][0].trim()] = key[i][1].trim();
  }

  return result;
}

module.exports = convertToObject;
