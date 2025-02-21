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
    .filter((line) => line.length > 0)
    .forEach((line) => {
      const [key, value] = line.split(':').map((part) => part.trim());

      if (key && value !== undefined) {
        result[key] = value;
      }
    });

  return result;
}

module.exports = convertToObject;
