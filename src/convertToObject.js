'use strict';

/**
 * Convert a CSS string into an object
 *
 * @param {string} sourceString
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style.length > 0)
    .reduce((cssObject, style) => {
      const [key, value] = style.split(':').map((part) => part.trim());

      if (key && value) {
        cssObject[key] = value;
      }

      return cssObject;
    }, {});
}

module.exports = convertToObject;
