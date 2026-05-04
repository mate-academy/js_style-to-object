'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  // write your code here
  return stylesString
    .split(';')
    .filter((line) => line.trim() !== '')
    .reduce((acc, line) => {
      const [key, value] = line.split(':');

      acc[key.trim()] = value.trim();

      return acc;
    }, {});
}

module.exports = convertToObject;
