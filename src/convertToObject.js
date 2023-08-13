'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(property => property.trim().split(':'))
    .filter(property => property[0])
    .reduce((properties, property) => {
      const key = property[0].trim();
      const value = property[1].trim();

      return {
        ...properties, [key]: value,
      };
    }, {});
}

module.exports = convertToObject;
