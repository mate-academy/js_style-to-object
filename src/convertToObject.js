'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  const result = {};

  stylesString
    .split(';')
    .map((part) => part.trim())
    .filter((part) => part)
    .forEach((part) => {
      const colonIndex = part.indexOf(':');

      if (colonIndex === -1) {
        return;
      }

      const key = part.slice(0, colonIndex).trim();
      const value = part.slice(colonIndex + 1).trim();

      if (key) {
        result[key] = value;
      }
    });

  return result;
}

module.exports = convertToObject;
