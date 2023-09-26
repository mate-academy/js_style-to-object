'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(string => string.trim())
    .filter(string => string)
    .map(string => string.split(':'))
    .map(pair => pair.map(part => part.trim()))
    .reduce((accumulator, [key, value]) => ({
      ...accumulator,
      [key]: value,
    }), {});
}

module.exports = convertToObject;
