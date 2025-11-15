'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const parts = sourceString.split(';');

  for (const part of parts) {
    const trimmed = part.trim();

    if (!trimmed) {
      continue;
    }

    const [key, ...rest] = trimmed.split(':');

    if (!key || rest.length === 0) {
      continue;
    }

    const value = rest.join(':').trim();

    result[key.trim()] = value;
  }

  return result;
}

module.exports = convertToObject;
