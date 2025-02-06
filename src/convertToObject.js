'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const result = {};

  sourceString.split(';').forEach((declaration) => {
    declaration.trim();

    if (!declaration) {
      return;
    }

    const colonIndex = declaration.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const key = declaration.substring(0, colonIndex).trim();
    const value = declaration.substring(colonIndex + 1).trim();

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
