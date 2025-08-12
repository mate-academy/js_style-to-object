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
    .map(function (style) {
      return style.trim();
    })
    .filter(function (style) {
      return style !== '';
    })
    .map(function (style) {
      const parts = style.split(':');
      const key = parts[0].trim();
      const value = parts[1].trim();

      result[key] = value;
    });

  return result;
}

module.exports = convertToObject;
