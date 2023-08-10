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
  return sourceString.split(';')
    .filter((item) => item.trim() !== '')
    .map((item) => item.split(':'))
    .reduce((acc, item) => {
      return {
        ...acc,
        [item[0].trim()]: item[1].trim(),
      };
    }, {});
}

module.exports = convertToObject;
