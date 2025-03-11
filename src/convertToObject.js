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
    .map((row) => row.trim())
    .filter((row) => row.includes(':'))
    .reduce((acc, row) => {
      const [key, value] = row.split(':').map((part) => part.trim());

      acc[key] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
