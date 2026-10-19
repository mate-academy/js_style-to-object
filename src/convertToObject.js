'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').forEach((style) => {
    const colonIndex = style.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const property = style.slice(0, colonIndex).trim();
    const value = style.slice(colonIndex + 1).trim();

    if (property && value) {
      result[property] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
