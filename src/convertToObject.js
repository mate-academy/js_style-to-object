'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const lines = sourceString.split(';');

  lines
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .forEach((line) => {
      const [key, value] = line.split(':');

      result[key.trim()] = value.trim();
    });

  return result;
}

module.exports = convertToObject;
