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
  const result = {};
  const str = sourceString.split(';');

  for (const item of str) {
    const idx = item.indexOf(':');
    const property = item.slice(0, idx).trim();

    if (property) {
      result[property] = item.slice(idx + 1).trim();
    }
  }

  return result;
}

module.exports = convertToObject;
