'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .trim()
    .split(';')
    .reduce((acc, item) => {
      const [key, value] = item.trim().split(':');

      if (key.trim() === '' || value.trim() === '') {
        return acc;
      }

      acc[key.trim()] = value.trim();

      return acc;
    }, {});
}

module.exports = convertToObject;
