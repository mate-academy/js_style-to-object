'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((part) => part.trim().length > 0)
    .reduce((stylesMap, part) => {
      const colonIndex = part.indexOf(':');

      if (colonIndex !== -1) {
        const key = part.slice(0, colonIndex).trim();
        const value = part.slice(colonIndex + 1).trim();

        stylesMap[key] = value;
      }

      return stylesMap;
    }, {});
}

module.exports = convertToObject;
