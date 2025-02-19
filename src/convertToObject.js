'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((row) => row.trim())
    .filter((row) => row)
    .map((row) => row.split(':'))
    .map(([key, value]) => [key.trim(), value.trim()])
    .reduce((acc, [key, value]) => {
      if (key && value) {
        acc[key] = value;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
