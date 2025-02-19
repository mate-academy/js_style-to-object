'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style)
    .reduce((styles, style) => {
      const [key, value] = style.split(':').map((part) => part.trim());

      styles[key] = value;

      return styles;
    }, {});
}

module.exports = convertToObject;
