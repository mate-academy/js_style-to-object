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
    .filter((line) => line.length > 0)
    .map((line) => line.split(':'))
    .map(([key, value]) => [key.trim(), value.trim()])
    .reduce((acc, [key, value]) => {
      acc[key] = value;

      return acc;
    }, {});
}
module.exports = convertToObject;
