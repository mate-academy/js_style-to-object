'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean)
    .reduce((acc, item) => {
      const colonIndex = item.indexOf(':');

      if (colonIndex !== -1) {
        const key = item.slice(0, colonIndex).trim();
        const value = item.slice(colonIndex + 1).trim();

        acc[key] = value;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
