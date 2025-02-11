'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((el) => el.includes(':'))
    .map((el) => el.split(':'))
    .reduce((acc, [key, value]) => {
      if (key && value) {
        acc[key.trim()] = value.trim();
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
