'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const lines = sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.trim() !== '')
    .map((line) => {
      const [prop, value] = line.split(':');

      return [prop.trim(), value.trim()];
    });

  return Object.fromEntries(lines);
}

module.exports = convertToObject;
