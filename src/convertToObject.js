'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const source = {};

  sourceString.split(';')
    .map(properties => properties.trim())
    .filter(properties => properties.length > 1)
    .map(properties => properties.split(':'))
    .forEach(([property, value]) => {
      source[property.trim()] = value.trim();
    });

  return source;
}

module.exports = convertToObject;
