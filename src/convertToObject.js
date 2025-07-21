'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  sourceString.split(';').forEach((declaration) => {
    const trimmedDeclaration = declaration.trim();

    if (!trimmedDeclaration) {
      return;
    }

    const parts = trimmedDeclaration.split(':');

    if (parts.length === 2) {
      const property = parts[0].trim();
      const value = parts[1].trim();

      if (property && value) {
        styleObject[property] = value;
      }
    }
  });

  return styleObject;
}

module.exports = convertToObject;
