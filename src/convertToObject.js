'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString.split(';');

  const styleObject = declarations.reduce((acc, declaration) => {
    const trimmedDeclaration = declaration.trim();

    if (trimmedDeclaration.length === 0) {
      return acc;
    }

    const colonIndex = trimmedDeclaration.indexOf(':');

    if (colonIndex === -1) {
      return acc;
    }

    const property = trimmedDeclaration.substring(0, colonIndex).trim();

    const value = trimmedDeclaration.substring(colonIndex + 1).trim();

    if (property && value) {
      acc[property] = value;
    }

    return acc;
  }, {});

  return styleObject;
}

module.exports = convertToObject;
