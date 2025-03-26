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
    .filter((item) => item.includes(':'))
    .reduce((acc, item) => {
      const [key, value] = item.split(':');
      acc[key.trim()] = value.trim();
      return acc;
    }, {});
}

module.exports = convertToObject;
