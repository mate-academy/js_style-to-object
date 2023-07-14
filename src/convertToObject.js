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
  const modifiedInput = sourceString
    .split(';')
    .map(item => item.split(':'))
    .filter(val => val.length > 1)
    .map(array => array.map(str => str.trim()));

  const finalObject = {};

  for (const array of modifiedInput) {
    finalObject[array[0]] = array[1];
  }

  return finalObject;
}

module.exports = convertToObject;
