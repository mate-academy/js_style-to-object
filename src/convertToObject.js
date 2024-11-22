'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const entries = sourceString
    .split(';')
    .map((entry) => entry.trim())
    .filter((entry) => entry);

  const result = {};

  for (const entry of entries) {
    if (entry.includes(':')) {
      const [rawKey, ...rawValueParts] = entry.split(':');
      const key = rawKey.trim();
      const value = rawValueParts.join(':').trim();

      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
