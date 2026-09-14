'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const stringArray = sourceString.split(';');

  const result = {};

  for (const element of stringArray) {
    const parts = element.split(':');

    if (parts[1] === undefined) {
      continue;
    }

    const property = parts[0].trim();
    const value = parts[1].trim();

    result[property] = value;
  }

  return result;
}

module.exports = convertToObject;
