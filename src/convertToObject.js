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
    .reduce((accum, initialPair) => {
      const first = initialPair[0].trim();
      const second = initialPair[1].trim();

      accum[first] = second;

      return accum;
    }, {});
}

module.exports = convertToObject;
