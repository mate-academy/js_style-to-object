'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString.split('\n').join('').split(';');

  const result = {};

  for (const property of properties) {
    const keyValue = property.split(':');

    if (keyValue.length === 2) {
      result[keyValue[0].trim()] = keyValue[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
