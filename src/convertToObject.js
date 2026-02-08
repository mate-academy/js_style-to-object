'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  return stylesString
    .split(';')
    .filter((line) => line.trim() !== '')
    .reduce((acc, line) => {
      const [key, value] = line.split(':');

      if (value !== undefined) {
        acc[key.trim()] = value.trim();
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
