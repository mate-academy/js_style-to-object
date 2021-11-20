'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const obj = {};
  const newArr = sourceString.split(';').map(elem => elem.split(':'));

  for (const key of newArr) {
    for (let i = 0; i < key.length - 1; i++) {
      obj[key[i].trim()] = key[i + 1].trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
