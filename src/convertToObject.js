'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const declarations = sourceString.split(';');

  declarations.forEach((declaration) => {
    const trimmedDeclaration = declaration.trim();

    if (trimmedDeclaration.includes(':')) {
      const colonIndex = trimmedDeclaration.indexOf(':');
      const key = trimmedDeclaration.slice(0, colonIndex).trim();
      const value = trimmedDeclaration.slice(colonIndex + 1).trim();

      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
