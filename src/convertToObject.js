'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .filter((item) => item.includes(':'))
    .map((item) => item.trim().split(':', 2))
    .filter((item) => item[0] !== '' && item[1] !== '')
    .forEach(function (item) {
      result[item[0].trim()] = item[1].trim();
    });

  return result;
}

module.exports = convertToObject;
