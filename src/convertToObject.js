'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((str) => str.trim().length > 0)
    .reduce((acc, str) => {
      const parts = str.split(':');

      if (parts.length !== 2) {
        return acc;
      }

      const [key, value] = parts;

      acc[key.trim()] = value.trim();

      return acc;
    }, {});
}

module.exports = convertToObject;
