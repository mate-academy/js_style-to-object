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
  const cssProperties = sourceString
    .split(';')
    .map(property => property.split(':'))
    .reduce(
      (properties, property) => (
        (property[0] && property[1])
          ? {
            ...properties,
            [property[0].trim()]: property[1].trim(),
          }
          : { ...properties }
      ), {});

  return cssProperties;
}

module.exports = convertToObject;
