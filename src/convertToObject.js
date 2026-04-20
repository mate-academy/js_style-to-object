'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  if (!sourceString) {
    return result;
  }

  // Zmienione ze stylesString na sourceString
  const declarations = sourceString.split(';');

  declarations.forEach((declaration) => {
    const trimmedDeclaration = declaration.trim();

    if (trimmedDeclaration.length > 0) {
      const colonIndex = trimmedDeclaration.indexOf(':');

      if (colonIndex !== -1) {
        const key = trimmedDeclaration.substring(0, colonIndex).trim();
        const value = trimmedDeclaration.substring(colonIndex + 1).trim();

        result[key] = value;
      }
    }
  });

  return result;
}

module.exports = convertToObject;
