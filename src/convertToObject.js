'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = sourceString
    .split(';')
    .map((pair) => pair.trim())
    .filter((pair) => pair)
    .reduce((acc, pair) => {
      const colonIndex = pair.indexOf(':');

      if (colonIndex === -1) {
        return acc;
      }

      const key = pair.slice(0, colonIndex).trim();
      const value = pair.slice(colonIndex + 1).trim();

      if (!key || !value) {
        return acc;
      }

      acc[key] = value;

      return acc;
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
