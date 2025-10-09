'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((acc, declaration) => {
    const line = declaration.trim();

    if (!line) {
      return acc;
    }

    const colonIndex = line.indexOf(':');

    if (colonIndex === -1) {
      return acc;
    }

    const key = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1).trim();

    acc[key] = value;

    return acc;
  }, {});
}

module.exports = convertToObject;
