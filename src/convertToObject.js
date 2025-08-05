'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString
    .trim()
    .split(';')
    .forEach((str) => {
      if (!str.trim()) {
        return;
      }

      const [key, value] = str.split(':').map((str2) => str2.trim());

      if (key && value) {
        result[key] = value;
      }
    });

  return result;
}

module.exports = convertToObject;
