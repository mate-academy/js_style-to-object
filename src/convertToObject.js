'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .reduce((acc, line) => {
      const colonIndex = line.indexOf(':');
      if (colonIndex === -1) {
        return acc;
      }

      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();
      acc[key] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
