'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const arr = sourceString.split(';');

  for (const parts of arr) {
    const trimmed = parts.trim();

    if (!trimmed) {
      continue;
    }

    const colon = trimmed.indexOf(':');

    if (colon !== -1) {
      const key = trimmed.slice(0, colon).trim();
      const value = trimmed.slice(colon + 1).trim();

      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
