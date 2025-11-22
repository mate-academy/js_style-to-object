'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  return stylesString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration)
    .reduce((stylesObject, declaration) => {
      const lastColonIndex = declaration.lastIndexOf(':');

      if (lastColonIndex === -1) {
        return stylesObject;
      }

      const property = declaration.slice(0, lastColonIndex).trim();
      const value = declaration.slice(lastColonIndex + 1).trim();

      if (property && value) {
        stylesObject[property] = value;
      }

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
