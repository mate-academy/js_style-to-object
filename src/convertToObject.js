'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const arrString = sourceString.split(';');

  for (const item of arrString) {
    if (item.trim() !== '') {
      const [key, value] = item.split(':');

      if (key && value) {
        result[key.trim()] = value.trim();
      }
    }
  }

  return result;
}

module.exports = convertToObject;
