'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((declaration) => declaration.trim())
    .reduce((acc, decl) => {
      const index = decl.indexOf(':');

      if (index === -1) {
        return acc;
      }

      const property = decl.slice(0, index).trim();
      const value = decl.slice(index + 1).trim();

      acc[property] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
