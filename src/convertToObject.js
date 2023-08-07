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
    .reduce((prev, item) => {
      const [key, value] = item;

      prev[key.trim()] = value.trim();

      return prev;
    }, {});
}

module.exports = convertToObject;
