'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of
 * related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split(';').map(str => str.split(': '));

  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 1) {
      const key = arr[i][0].trim();

      const value = arr[i][1].trim();

      obj[key] = value;
    }
  }

  return obj;
}

module.exports = convertToObject;
