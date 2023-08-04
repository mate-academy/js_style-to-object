'use strict';

/**
 * Implement convertToObject function:
 *
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .trim()
    .split(';')
    .map((item) => item.trim().split(':'))
    .filter((item) => item.length > 1)
    .reduce(function(prev, item) {
      prev[item[0].trim()] = item[1].trim();

      return prev;
    }, {});
}

module.exports = convertToObject;
