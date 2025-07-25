'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};
  const lines = sourceString.split(';');

  for (let i = 0; i < lines.length; i++) {
    const parts = lines[i].split(':');

    if (parts.length >= 2) {
      const key = parts[0].trim();
      const value = parts[1].trim();

      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
