'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter(Boolean)
    .reduce((styles, declaration) => {
      const colonIndex = declaration.indexOf(':');

      if (colonIndex === -1) {
        return styles;
      }

      const property = declaration.slice(0, colonIndex).trim();
      const value = declaration.slice(colonIndex + 1).trim();

      if (!property || !value) {
        return styles;
      }

      return {
        ...styles,
        [property]: value,
      };
    }, {});
}

module.exports = convertToObject;
