'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(item => item.split(':'))
    .filter(item => item.length > 1)
    .reduce((acc, current) => {
      acc[current[0].trim()] = current[1].trim();

      return acc;
    }, {});
}

module.exports = convertToObject;
