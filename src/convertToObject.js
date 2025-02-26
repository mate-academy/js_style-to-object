'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  sourceString.split(';').forEach((source) => {
    const parts = source.trim().split(':');

    if (parts.length === 2) {
      const key = parts[0].trim();
      const value = parts[1].trim();

      obj[key] = value;
    }
  });

  return obj;
}

module.exports = convertToObject;
