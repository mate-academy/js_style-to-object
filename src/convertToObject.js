'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  sourceString
    .split(';')
    .map(function (style) {
      return style.trim();
    })
    .filter(function (style) {
      return style !== '' && style.includes(':');
    })
    .forEach(function (style) {
      const parts = style.split(':');
      const key = parts[0].trim();
      const value = parts.slice(1).join(':').trim();

      if (key && value) {
        styleObject[key] = value;
      }
    });

  return styleObject;
}

module.exports = convertToObject;
