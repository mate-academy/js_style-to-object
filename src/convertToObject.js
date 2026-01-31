'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').forEach((entry) => {
    const index = entry.indexOf(':');

    if (index !== -1) {
      const key = entry.slice(0, index).trim();
      const value = entry.slice(index + 1).trim();

      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
