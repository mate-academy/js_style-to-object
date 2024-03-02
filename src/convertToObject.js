'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const resultArray = sourceString
    .split(';')
    .map((string) => string.trim())
    .filter((string) => string !== '');

  for (const oneFromString of resultArray) {
    const parts = oneFromString.split(':').map((part) => part.trim());

    result[parts[0]] = parts[1];
  }

  return result;
}

module.exports = convertToObject;
