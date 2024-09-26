'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter(properties => properties.includes(':'))
    .map(properties => properties.split(':'))
    .reduce((acc, item) => ({
      ...acc,
      [item[0].trim()]: item[1].trim(),
    }), {});
}

module.exports = convertToObject;
