'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  if (sourceString) {
    const pairs = sourceString.split(';');

    pairs.forEach((pair) => {
      const trimmedPair = pair.trim();

      if (!trimmedPair || !trimmedPair.includes(':')) {
        return;
      }

      const colonIndex = trimmedPair.indexOf(':');

      if (colonIndex === -1) {
        return;
      }

      const key = trimmedPair.slice(0, colonIndex).trim();
      const value = trimmedPair
        .slice(colonIndex + 1)
        .trim()
        .replace(/;+$/, '');

      if (key && value) {
        result[key] = value;
      }
    });
  }

  return result;
}

module.exports = convertToObject;
