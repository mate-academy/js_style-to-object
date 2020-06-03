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

  const matches = sourceString.matchAll(regex);

  for (const [, property, value] of matches) {
    styleProperties[property] = value;
  }

  return styleProperties;
}

module.exports = convertToObject;
