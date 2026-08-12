'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item.length > 0)
    .map((item) => item.split(':'))
    .reduce((acc, [key, value]) => {
      acc[key.trim()] = value.trim();

      return acc;
    }, {});
}

module.exports = convertToObject;
