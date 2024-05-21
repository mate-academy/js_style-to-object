'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString.trim().split(';');

  return declarations.reduce((acc, declaration) => {
    const colonIndex = declaration.indexOf(':');

    if (colonIndex !== -1) {
      const property = declaration.slice(0, colonIndex).trim();
      const value = declaration.slice(colonIndex + 1).trim();

      if (property && value) {
        acc[property] = value;
      }
    }

    return acc;
  }, {});
}
module.exports = convertToObject;
