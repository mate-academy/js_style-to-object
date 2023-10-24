'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where
 * CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObject = {};
  const lines = sourceString.split('\n');

  for (const line of lines) {
    const parts = line.split(':');

    if (parts.length === 2) {
      const property = parts[0];
      const value = parts[1];

      const trimmedProperty = property.trim();
      const trimmedValue = value
        .replace(/\s+/g, ' ')
        .replace(/;$/, '')
        .trim();

      cssObject[trimmedProperty] = trimmedValue;
    }
  }

  return cssObject;
}

module.exports = convertToObject;
