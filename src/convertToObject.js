'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .trim()
    .split(';')
    .filter((style) => style.includes(':'))
    .map((style) => style.split(':'))
    .reduce((acc, [key, value]) => {
      acc[key.trim()] = value.trim();

      return acc;
    }, {});
}

module.exports = convertToObject;
