'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').forEach((elem) => {
    if (elem.trim()) {
      const [key, value] = elem.split(':');

      if (key && value) {
        result[key.trim()] = value.trim();
      }
    }
  });

  return result;
}

module.exports = convertToObject;
