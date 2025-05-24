'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const lines = sourceString.split(';');

  let currentProperty = null;

  for (const raw of lines) {
    const line = raw.trim();

    if (line === '') {
      continue;
    }

    if (line.includes(':')) {
      const [rawKey, ...rawValueParts] = line.split(':');
      const key = rawKey.trim();
      const value = rawValueParts.join(':').trim();

      result[key] = value;
      currentProperty = key;
    } else if (currentProperty) {
      result[currentProperty] += '\n' + line;
    }
  }

  return result;
}

module.exports = convertToObject;
