'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').forEach((line) => {
    const parts = line.split(':');

    if (parts.length >= 2) {
      const key = parts[0].trim();

      parts.shift();

      const value = parts.join(':').trim();

      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
