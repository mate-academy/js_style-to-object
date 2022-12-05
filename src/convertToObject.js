'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';')
    .map(property => property.trim().split(':'))
    .filter(property => property.length === 2)
    .map(([property, value]) => [property.trim(), value.trim()])
    .reduce((cssObject, [key, value]) => {
      cssObject[key] = value;

      return cssObject;
    }, {});
}

module.exports = convertToObject;
