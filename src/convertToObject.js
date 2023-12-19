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
  const splitedString = sourceString.split(';');
  const result = {};

  for (const words of splitedString) {
    const colonIndex = words.indexOf(':');

    if (colonIndex !== -1) {
      const property = words.slice(0, colonIndex).trim();
      const value = words.slice(colonIndex + 1).replace(';').trim();

      result[property] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
