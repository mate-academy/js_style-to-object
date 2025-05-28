'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      return;
    }

    const colonIndex = trimmed.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const key = trimmed.slice(0, colonIndex).trim();
    const value = trimmed.slice(colonIndex + 1).trim();

    if (key && value) {
      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
