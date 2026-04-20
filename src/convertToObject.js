'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  if (!sourceString) {
    return stylesObject;
  }

  const declarations = sourceString.split(';');

  declarations.forEach((declaration) => {
    const trimmedDeclaration = declaration.trim();

    if (trimmedDeclaration.length > 0) {
      const colonIndex = trimmedDeclaration.indexOf(':');

      if (colonIndex !== -1) {
        const key = trimmedDeclaration.substring(0, colonIndex).trim();
        const value = trimmedDeclaration.substring(colonIndex + 1).trim();

        stylesObject[key] = value;
      }
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
