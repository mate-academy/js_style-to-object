'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  const cssDeclarations = sourceString.split(';');

  const cssObject = {};

  cssDeclarations.forEach((cssDeclaration) => {
    const trimmedcssDeclaration = cssDeclaration.trim();

    if (trimmedcssDeclaration) {
      const parts = trimmedcssDeclaration.split(':');

      const property = parts[0].trim();

      const value = parts[1].trim();

      cssObject[property] = value;
    }
  });

  return cssObject;
}

module.exports = convertToObject;
