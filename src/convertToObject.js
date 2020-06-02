'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styleProperties = {};

  const regex = /([^\s;`]+)\s*:\s*([#\w\d-]*\s?[!.#\w\d-]*\s?[#\w\d-]+)/g;

  for (const [, value2, value3] of sourceString.matchAll(regex)) {
    styleProperties[value2] = value3;
  }

  return styleProperties;
}

module.exports = convertToObject;
