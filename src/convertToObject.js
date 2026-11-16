'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((styles, declaration) => {
    const trimmedDeclaration = declaration.trim();
    const separatorIndex = trimmedDeclaration.indexOf(':');

    if (!trimmedDeclaration || separatorIndex === -1) {
      return styles;
    }

    const property = trimmedDeclaration.slice(0, separatorIndex).trim();
    const value = trimmedDeclaration.slice(separatorIndex + 1).trim();

    if (property) {
      styles[property] = value;
    }

    return styles;
  }, {});
}

module.exports = convertToObject;
