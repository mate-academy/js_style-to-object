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
    .split(';')
    .filter((item) => item.trim() !== '')
    .map((item) => item.split(':'))
    .reduce((acc, [key, value]) => {
      return {
        ...acc,
        [key.trim()]: value.trim(),
      };
    }, {});
}

module.exports = convertToObject;
