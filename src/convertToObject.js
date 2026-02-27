'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const res = {};

  sourceString.split(';').forEach((line) => {
    const parts = line.split(':');

    if (parts.length >= 2) {
      const key = parts[0].trim();

      parts.shift();

      const value = parts.join(':').trim();

      res[key] = value;
    }
  });

  return res;
}

module.exports = convertToObject;
