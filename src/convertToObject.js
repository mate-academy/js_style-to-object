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
    .filter((line) => line.trim() !== '')
    .forEach((line) => {
      const index = line.indexOf(':');
      const key = line.slice(0, index).trim();
      const value = line.slice(index + 1).trim();

      if (key && value) {
        result[key] = value;
      }
    });

  return result;
}

module.exports = convertToObject;
