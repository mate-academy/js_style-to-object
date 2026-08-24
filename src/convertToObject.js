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
    .filter((style) => style.length > 0)
    .reduce((styles, style) => {
      const separatorIndex = style.indexOf(':');
      const property = style.slice(0, separatorIndex).trim();
      const value = style.slice(separatorIndex + 1).trim();

      styles[property] = value;

      return styles;
    }, {});
}

module.exports = convertToObject;
