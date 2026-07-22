'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitString = sourceString.split(';');

  return splitString.reduce((stylesObject, declaration) => {
    const trimmedDeclaration = declaration.trim();

    if (!trimmedDeclaration) {
      return stylesObject;
    }

    const colonIndex = trimmedDeclaration.indexOf(':');

    if (colonIndex !== -1) {
      const key = trimmedDeclaration.substring(0, colonIndex).trim();
      const value = trimmedDeclaration.substring(colonIndex + 1).trim();

      stylesObject[key] = value;
    }

    return stylesObject;
  }, {});
}

module.exports = convertToObject;
