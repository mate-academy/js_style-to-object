'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cleanedString = sourceString.trim();

  const declarations = cleanedString.split(';');

  const result = {};

  for (const declaration of declarations) {
    const trimmedDeclaration = declaration.trim();

    if (trimmedDeclaration) {
      const parts = trimmedDeclaration.split(':');

      if (parts.length === 2) {
        const property = parts[0].trim();
        const value = parts[1].trim();

        result[property] = value;
      }
    }
  }

  return result;
}

module.exports = convertToObject;
