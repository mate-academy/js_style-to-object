'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((line) => line.includes(':'))
    .map((line) => line.split(':'))
    .map(([key, value]) => ({ [key.trim()]: value.trim() }))
    .reduce((obj, item) => Object.assign(obj, item), {});
}

module.exports = convertToObject;
