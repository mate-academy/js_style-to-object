'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString || typeof sourceString !== 'string') {
    return {};
  }

  return sourceString.split(';').reduce((stylesObject, declaration) => {
    const colonIndex = declaration.indexOf(':');

    if (colonIndex === -1) {
      return stylesObject;
    }

    const key = declaration.slice(0, colonIndex).trim();
    const value = declaration.slice(colonIndex + 1).trim();

    if (key) {
      stylesObject[key] = value;
    }

    return stylesObject;
  }, {});
}

module.exports = convertToObject;
