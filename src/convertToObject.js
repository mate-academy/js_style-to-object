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
    .map(item => item.trim().split(':'))
    .filter(item => item.length > 1)
    .reduce((acc, item) => ({
      ...acc,
      [item[0].trim()]: item[1].trim(),
    }), {});
}

module.exports = convertToObject;
