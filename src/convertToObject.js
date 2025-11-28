'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}

function convertToObject(sourceString) {
  // write your code here
}
*/

module.exports = convertToObject;

function convertToObject(sourceString) {
  const styleObject = {};

  sourceString.split(';').forEach((declaration) => {
    const trimmedDeclaration = declaration.trim();

    if (trimmedDeclaration === '') {
      return;
    }

    const firstColonIndex = trimmedDeclaration.indexOf(':');

    if (firstColonIndex === -1) {
      return;
    }

    const property = trimmedDeclaration.substring(0, firstColonIndex).trim();
    const value = trimmedDeclaration.substring(firstColonIndex + 1).trim();

    if (property && value) {
      styleObject[property] = value;
    }
  });

  return styleObject;
}
