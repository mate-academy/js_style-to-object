'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((string) => string.trim())
    .filter((string) => string !== '')
    .map((string) => string.split(':'))
    .map((string) => {
      return { [string[0].trim()]: string[1].trim() };
    })
    .reduce((acc, obj) => {
      return { ...acc, ...obj };
    }, {});
}

module.exports = convertToObject;
