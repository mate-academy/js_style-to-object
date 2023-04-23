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
  const regexp = /([a-z-]+)\s*:\s*([a-z0-9!\-.()# ]+);/g;
  const converted = {};

  for (const i of sourceString.matchAll(regexp)) {
    converted[i[1]] = i[2].trim();
  }

  return converted;
}

module.exports = convertToObject;
