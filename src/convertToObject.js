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
    .filter((declaration) => declaration)
    .map((declaration) => {
      const colonIndex = declaration.indexOf(':');

      if (colonIndex === -1) {
        return null;
      }

      const property = declaration.slice(0, colonIndex).trim();
      const value = declaration.slice(colonIndex + 1).trim();

      return property && value ? { property, value } : null;
    })
    .filter(Boolean)
    .reduce((stylesObject, { property, value }) => {
      stylesObject[property] = value;

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
