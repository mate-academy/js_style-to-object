'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((stylesObject, currentStyle) => {
    const trimmedStyle = currentStyle.trim();

    if (!trimmedStyle) {
      return stylesObject;
    }

    const colonIndex = trimmedStyle.indexOf(':');

    if (colonIndex === -1) {
      return stylesObject;
    }

    const key = trimmedStyle.slice(0, colonIndex).trim();
    const value = trimmedStyle.slice(colonIndex + 1).trim();

    stylesObject[key] = value;

    return stylesObject;
  }, {});
}

module.exports = convertToObject;
