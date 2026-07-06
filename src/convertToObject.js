'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((style) => style.trim() !== '')
    .reduce((cssStyles, style) => {
      const parts = style.split(':');
      const property = parts[0].trim();
      const value = parts.slice(1).join(':').trim();

      return {
        ...cssStyles,
        [property]: value,
      };
    }, {});
}

module.exports = convertToObject;
