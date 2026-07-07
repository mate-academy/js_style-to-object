'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};
  const splitString = sourceString.trim().split(';');

  for (let i = 0; i < splitString.length; i++) {
    const partsString = splitString[i].trim().split(':');

    if (partsString.length < 2) {
      continue;
    }

    const key = partsString[0].trim();
    const value = partsString[1].trim();

    result[key] = value.trim();
  }

  return result;
}

module.exports = convertToObject;
