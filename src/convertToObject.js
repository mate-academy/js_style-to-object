'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((line) => line.trim().length > 0)
    .reduce((parsedStyles, line) => {
      const colonIndex = line.indexOf(':');

      if (colonIndex === -1) {
        return parsedStyles;
      }

      const rawKey = line.slice(0, colonIndex).trim();
      const rawValue = line.slice(colonIndex + 1).trim();

      if (!rawKey) {
        return parsedStyles;
      }

      return { ...parsedStyles, [rawKey]: rawValue };
    }, {});
}

module.exports = convertToObject;
