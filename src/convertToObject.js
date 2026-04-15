'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style !== '')
    .reduce((acc, style) => {
      const [key, value] = style.split(':');

      acc[key.trim()] = value.trim();

      return acc;
    }, {});
}

module.exports = convertToObject;
