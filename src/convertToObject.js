'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceObject = sourceString.trim().split(';')
    .map(property => property.trim().split(':'))
    .filter(property => property[0] !== '')
    .reduce((properties, property) => {
      const keyProperty = property[0].trim();
      const valueProperty = property[1].trim();

      return {
        ...properties,
        [keyProperty]: valueProperty,
      };
    }, {});

  return sourceObject;
}

module.exports = convertToObject;
