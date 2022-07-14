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
    .map(el => el.split(':'))
    .filter(ar => ar.length > 1)
    .reduce((prev, curr) => ({
      ...prev, [curr[0].trim()]: curr[1].trim(),
    }), {});
}

module.exports = convertToObject;
