'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const parts = sourceString.split(';');
  const result = {};

  for (const part of parts) {
    const piece = part.trim().split(':');

    if (piece.length === 2) {
      const key = piece[0].trim();
      const value = piece[1].trim();

      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
