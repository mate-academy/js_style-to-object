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
    .map((line) => line.trim())
    .filter((line) => line && line.includes(':'))
    .reduce((acc, line) => {
      const [key, ...rest] = line.split(':');
      const value = rest.join(':').trim();

      acc[key.trim()] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
