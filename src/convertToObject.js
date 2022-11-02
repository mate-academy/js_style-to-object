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
  const propertyList = sourceString.split(';');

  const fromString = {};

  for (const property of propertyList) {
    const key = property.split(':')[0];
    const value = property.split(':')[1];

    if (key && value) {
      fromString[key.trim()] = value.trim();
    }
  }

  return fromString;
}

module.exports = convertToObject;
