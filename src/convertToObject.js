'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item.length)
    .reduce((acc, item) => {
      const parts = item.split(':');
      const key = parts[0] ? parts[0].trim() : '';
      const value = parts[1] ? parts[1].trim() : '';

      if (key && value) {
        acc[key] = value;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
