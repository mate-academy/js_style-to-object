'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (
 * see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrays = sourceString.split(';');
  const resultOblect = {};

  for (let i = 0; i < arrays.length; i++) {
    const parts = arrays[i].split(':');

    if (parts.length === 2) {
      const key = parts[0].trim();
      const value = parts[1].trim();

      resultOblect[key] = value;
    }
  }

  return resultOblect;
}

module.exports = convertToObject;
