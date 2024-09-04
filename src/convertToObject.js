'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((property) => property.split(':'))
    .filter((entry) => entry.length > 1)
    .reduce((acc, entry) => {
      acc[entry[0].trim()] = entry[1].trim();

      return acc;
    }, {});
}

module.exports = convertToObject;
