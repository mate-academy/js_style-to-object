'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const requiredArray = [];

  const properties = sourceString
    .split(';')
    .map(element => element.trim().split(':'))
    .filter(element => !element.includes(''));

  properties.forEach(property => requiredArray
    .push([property[0].trim(), property[1].trim()]));

  return Object.fromEntries(requiredArray);
}

module.exports = convertToObject;
