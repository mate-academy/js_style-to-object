'use strict';

// const stylesString = require('./stylesString');

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
  const result = {};
  const stylesProperties = sourceString.split(';');

  stylesProperties.forEach(property => {
    const stylePart = property.split(':');
    const key = stylePart[0].trim();
    const value = stylePart[1] ? stylePart[1].trim() : '';

    if (key) {
      result[key] = value;
    }
  });

  return result;
}
module.exports = convertToObject;
