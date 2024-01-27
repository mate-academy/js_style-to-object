'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
  in [stylesString.js](./stylesString.js))
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
  const splitString = sourceString.split(';\n');

  splitString.forEach((line) => {
    const parts = line.split(':');

    if (parts.length === 2) {
      const key = parts[0].trim();
      const value = parts[1].trim();

      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
