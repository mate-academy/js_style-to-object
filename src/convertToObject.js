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
  const properties = sourceString
    .split(';')
    .map(property => property.split(':'))
    .reduce(
      (prevPropertys, property) => (
        (property.length === 2)
          ? {
            ...prevPropertys,
            [property[0].trim()]: property[1].trim(),
          }
          : { ...prevPropertys }
      ), {});

  return properties;
}

module.exports = convertToObject;
