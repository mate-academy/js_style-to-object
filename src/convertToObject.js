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
  const sourceStringParts = sourceString.split(';');

  const result = {};

  sourceStringParts.map((entry) => entry.trim())
    .filter((entry) => entry.length > 0)
    .forEach((entry) => {
      const cssRow = entry.split(':');
      const key = cssRow[0].trim();
      const value = cssRow[1].trim();

      result[key] = value;
    });

  return result;
}

module.exports = convertToObject;
