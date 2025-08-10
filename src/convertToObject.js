'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((el) => el.trim())
    .filter(Boolean)
    .map((el) => el.split(':'))
    .map((arr) => arr.map((el) => el.trim()))
    .reduce((acc, arr) => {
      acc[arr[0]] = arr[1];

      return acc;
    }, {});
}

module.exports = convertToObject;
