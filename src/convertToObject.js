'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values
 * of related CSS properties (see an exampl in [test file]
 * (./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const obj = {};

  const arr = sourceString.split(';');

  for (const key of arr) {
    const arr1 = key.split(':');

    if (arr1.length === 2) {
      obj[arr1[0].trim()] = arr1[1].trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
