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
    .filter((line) => line.trim().length > 0)
    .reduce((accumulator, line) => {
      const colonIndex = line.indexOf(':');
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();

      accumulator[key] = value;

      return accumulator;
    }, {});
}

module.exports = convertToObject;
