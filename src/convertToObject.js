'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').forEach((style) => {
    const declaration = style.trim();

    if (!declaration) {
      return;
    }

    const colonIndex = declaration.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const key = declaration.slice(0, colonIndex).trim();
    const value = declaration.slice(colonIndex + 1).trim();

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
