'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const pieces = sourceString
    .split(';')
    .map((piece) => piece.trim())
    .filter((piece) => piece.length > 0);

  const result = {};

  pieces.forEach((piece) => {
    const colonIndex = piece.indexOf(':');
    const key = piece.slice(0, colonIndex).trim();
    const value = piece.slice(colonIndex + 1).trim();

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
