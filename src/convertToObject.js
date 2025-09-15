'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  if (!sourceString) {
    return result;
  }

  const parts = sourceString.split(';');

  for (const raw of parts) {
    const part = raw.trim();

    if (!part) {
      continue;
    }

    const colonIndex = part.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const key = part.slice(0, colonIndex).trim();
    const value = part.slice(colonIndex + 1).trim();

    if (key) {
      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
