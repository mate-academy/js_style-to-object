'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((stylesObject, declaration) => {
    const trimmedDeclaration = declaration.trim();

    if (!trimmedDeclaration) {
      return stylesObject;
    }

    const separatorIndex = trimmedDeclaration.indexOf(':');

    const property = trimmedDeclaration.slice(0, separatorIndex).trim();

    const value = trimmedDeclaration.slice(separatorIndex + 1).trim();

    stylesObject[property] = value;

    return stylesObject;
  }, {});
}

module.exports = convertToObject;
