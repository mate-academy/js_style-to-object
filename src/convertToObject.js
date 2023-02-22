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
    .map(property => property.split(':'))
    .filter(property => (property.length === 2))
    .reduce((objectifiedStyles, [key, value]) => {
      objectifiedStyles[key.trim()] = value.trim();

      return objectifiedStyles;
    }, {});
}

module.exports = convertToObject;
