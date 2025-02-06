'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((a) => a.includes(':'))
    .map((a) => ({ [a.split(':')[0].trim()]: a.split(':')[1].trim() }))
    .reduce((prev, curr) => {
      Object.assign(prev, curr);

      return prev;
    }, {});
}

module.exports = convertToObject;
