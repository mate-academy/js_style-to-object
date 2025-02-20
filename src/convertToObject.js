'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((str) => str.trim())
    .reduce((acc, string) => {
      const [key, value] = string.split(':').map((str) => str.trim());

      if (key) {
        acc[key] = value;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
