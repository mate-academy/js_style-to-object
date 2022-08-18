'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const stylesObj = {};

  sourceString
    .split(';')
    .filter(string => string.trim())
    .map(string => string.split(':'))
    .forEach(string => (stylesObj[string[0].trim()] = string[1].trim()));

  return stylesObj;
}

module.exports = convertToObject;
