'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').forEach((dec) => {
    if (dec.includes(':')) {
      const [key, value] = dec.split(':');

      if (key && value) {
        result[key.trim()] = value.trim();
      }
    }
  });

  return result;
}

module.exports = convertToObject;
