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
    .map((style) => style.trim())
    .filter((trimedStyle) => trimedStyle !== '')
    .forEach((style) => {
      const index = style.indexOf(':');

      const key = style.slice(0, index).trim();
      const value = style.slice(index + 1).trim();

      result[key] = value;
    });

  return result;
}

module.exports = convertToObject;
