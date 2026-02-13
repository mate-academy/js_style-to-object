'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  if (!sourceString) {
    return {};
  }

  return sourceString.split(';').reduce((stylesObject, declaration) => {
    const trimmed = declaration.trim();

    if (trimmed) {
      const colonIndex = trimmed.indexOf(':');

      if (colonIndex !== -1) {
        const key = trimmed.slice(0, colonIndex).trim();
        const value = trimmed.slice(colonIndex + 1).trim();

        stylesObject[key] = value;
      }
    }

    return stylesObject;
  }, {});
}

module.exports = convertToObject;
