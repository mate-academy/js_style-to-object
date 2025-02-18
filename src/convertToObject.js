'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((element) => element.includes(':'))
    .map((element) => element.split(':'))
    .map(([key, value]) => ({ [key.trim()]: value.trim() }))
    .reduce((obj, item) => Object.assign(obj, item), {});
}

module.exports = convertToObject;
