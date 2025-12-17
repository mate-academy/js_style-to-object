'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.length)
    .forEach((line) => {
      const [key, value] = line.split(':');

      if (!key || !value) {
        return;
      }

      result[key.trim()] = value.trim();
    });

  return result;
}

module.exports = convertToObject;
