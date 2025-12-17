'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .replace(/\t+/g, ' ')
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style.length && style.includes(':'))
    .reduce((stylesObject, style) => {
      const colonIndex = style.indexOf(':');

      const property = style.slice(0, colonIndex).trim();
      const value = style.slice(colonIndex + 1).trim();

      if (property.length) {
        stylesObject[property] = value;
      }

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
