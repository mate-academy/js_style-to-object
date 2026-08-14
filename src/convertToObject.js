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
    .filter((trimedStyle) => trimedStyle !== '')
    .reduce((styleObject, style) => {
      const separatorIndex = style.indexOf(':');
      const key = style.slice(0, separatorIndex).trim();
      const value = style.slice(separatorIndex + 1).trim();

      styleObject[key] = value;

      return styleObject;
    }, {});
}

module.exports = convertToObject;
