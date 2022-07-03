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
  return sourceString
    .split(';')
    .map(line => line.split(':'))
    .filter(arr => arr.length === 2)
    .reduce((obj, pair) => ({
      ...obj,
      [pair[0].trim()]: pair[1].trim(),
    }), {});
}

module.exports = convertToObject;
