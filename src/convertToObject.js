'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  return stylesString.split(';').reduce((accumulator, declaration) => {
    const trimmedDecl = declaration.trim();

    if (!trimmedDecl) {
      return accumulator;
    }

    const colonIndex = trimmedDecl.indexOf(':');

    if (colonIndex === -1) {
      return accumulator;
    }

    const property = trimmedDecl.slice(0, colonIndex).trim();
    const value = trimmedDecl.slice(colonIndex + 1).trim();

    if (property && value) {
      accumulator[property] = value;
    }

    return accumulator;
  }, {});
}

module.exports = convertToObject;
