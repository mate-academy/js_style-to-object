'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').forEach((style) => {
    const trimmedStyle = style.trim();

    if (!trimmedStyle) {
      return;
    }

    const colonIndex = trimmedStyle.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const property = trimmedStyle.slice(0, colonIndex).trim();
    const value = trimmedStyle.slice(colonIndex + 1).trim();

    result[property] = value;
  });

  return result;
}

module.exports = convertToObject;
