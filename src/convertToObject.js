'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString.split(';')
    .map(prop => prop.trim())
    .filter(Boolean)
    .map(prop => prop.split(':'))
    .reduce(function(prev, curr) {
      prev[curr[0].trim()] = curr[1].trim();
      return prev;
    }, {});
}

module.exports = convertToObject;
