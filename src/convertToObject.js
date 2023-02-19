'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  // write your code here
  const stylesArr = sourceString.trim().split(';');
  const result = {};

  for (const key in stylesArr) {
    const indexArr = stylesArr[key].trim().split(':');
    if (indexArr[0] !== '') {
      result[indexArr[0]] = indexArr[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
