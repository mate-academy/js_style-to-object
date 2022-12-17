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
  const arr = sourceString
    .split(';')
    .map(prop => prop.split(':'))
    .map(prop => prop.map(str => str.trim()))
    .filter(str => str[0] !== '');
  const sourceObject = {};

  for (const [key, value] of arr) {
    sourceObject[key] = value;
  }

  return sourceObject;
}

module.exports = convertToObject;
