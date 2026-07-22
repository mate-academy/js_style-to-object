'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((cssObject, declaration) => {
    const trimmed = declaration.trim();

    if (!trimmed) {
      return cssObject;
    }

    const parts = trimmed.split(':');
    const property = parts[0].trim();
    const value = parts.slice(1).join(':').trim();

    cssObject[property] = value;

    return cssObject;
  }, {});
}

module.exports = convertToObject;
