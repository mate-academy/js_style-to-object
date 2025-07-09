'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((pair) => pair.trim())
    .filter((item) => item !== '')
    .map((item) => item.split(':'))
    .filter(([key, value]) => key && value !== undefined)
    .reduce((acc, [key, value]) => {
      acc[key.trim()] = value.trim();

      return acc;
    }, {});
}

module.exports = convertToObject;
