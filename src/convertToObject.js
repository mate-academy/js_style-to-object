'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 *   in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 *   in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceObject = {};

  sourceString
    .split(';')
    .filter(a => a.trim())
    .map(a => a.split(':'))
    .forEach(a => (sourceObject[a[0].trim()] = a[1].trim()));

  return sourceObject;
}

module.exports = convertToObject;
