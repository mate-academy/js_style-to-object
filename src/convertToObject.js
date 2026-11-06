'use strict';

/**
 * @param {string} sourceString
 *
 * @returns {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((stylesObject, declaration) => {
    const colonIndex = declaration.indexOf(':');

    if (colonIndex === -1) {
      return stylesObject;
    }

    const property = declaration.slice(0, colonIndex).trim();
    const value = declaration.slice(colonIndex + 1).trim();

    if (!property || !value) {
      return stylesObject;
    }

    return {
      ...stylesObject,
      [property]: value,
    };
  }, {});
}

module.exports = convertToObject;
