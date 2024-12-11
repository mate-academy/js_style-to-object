'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((line) => line.trim())
    .map((line) => {
      const colonIndex = line.indexOf(':');

      if (colonIndex === -1) {
        return [null, null];
      }

      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();

      return [key, value];
    })
    .reduce((styles, [key, value]) => {
      if (key && value) {
        styles[key] = value;
      }

      return styles;
    }, {});
}

module.exports = convertToObject;
