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
  const sourceArray = sourceString.split(';');
  const result = {};

  for (const styleRow of sourceArray) {
    const styleKeyValue = styleRow.split(':');

    if (styleKeyValue.length === 2) {
      const key = styleKeyValue[0].trim();
      const value = styleKeyValue[1].trim();

      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
