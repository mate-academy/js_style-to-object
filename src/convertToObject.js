'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  return stylesString
    .split(';')
    .map(style => style.trim())
    .filter(style => style.length > 0)
    .reduce((stylesObject, style) => {
      const separatorIndex = style.indexOf(':');

      const property = style.slice(0, separatorIndex).trim();
      const value = style.slice(separatorIndex + 1).trim();

      stylesObject[property] = value;

      return stylesObject;
    }, {});
}
module.exports = convertToObject;
