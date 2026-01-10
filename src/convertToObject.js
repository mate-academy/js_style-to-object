'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(stylesString) {
  const newString = stylesString.replace(/\/\*[\s\S]*?\*\//g, '');

  return newString
    .split(';')
    .map((decl) => decl.trim())
    .filter((decl) => decl.length > 0)
    .reduce((stylesObject, declaration) => {
      const colonIndex = declaration.indexOf(':');

      if (colonIndex === -1) {
        return stylesObject;
      }

      const property = declaration.slice(0, colonIndex).trim();
      const value = declaration.slice(colonIndex + 1).trim();

      if (property && value) {
        return { ...stylesObject, [property]: value };
      }

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
