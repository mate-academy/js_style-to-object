'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.split(';');

  return stylesArray
    .map((s) => s.trim())
    .filter(Boolean)
    .reduce((acc, item) => {
      const colonIndex = item.indexOf(':');

      if (colonIndex === -1) {
        return acc;
      }

      const key = item.slice(0, colonIndex).trim();
      const value = item.slice(colonIndex + 1).trim();

      if (!key || !value) {
        return acc;
      }

      acc[key] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
