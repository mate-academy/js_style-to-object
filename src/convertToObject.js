'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const arr = sourceString.split(';');
  const result = {};

  arr.forEach((style) => {
    if (style.trim()) {
      const [key, value] = style.split(':');

      result[key.trim()] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
