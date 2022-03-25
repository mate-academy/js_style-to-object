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
  // write your code here
  const styleProperties = {};

  const regex = /([^\s;`]+)\s*:\s*([#\w\d-]*\s?[!.#\w\d-]*\s?[#\w\d-]+)/g;

  const matches = sourceString.matchAll(regex);

  for (const [, property, value] of matches) {
    styleProperties[property] = value;
  }

  return styleProperties;
}

module.exports = convertToObject;
