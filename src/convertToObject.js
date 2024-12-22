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
    .filter((line) => line !== '')
    .forEach((line) => {
      const [key, value] = line.split(':');

      result[key.trim()] = value.trim();
    });

  return result;
}

module.exports = convertToObject;
