'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const strings = sourceString
    .split(';')
    .filter((string) => string.includes(':'))
    .map((string) => string.split(':'))
    .map(([name, value]) => ({ [name.trim()]: value.trim() }));

  return Object.assign({}, ...strings);
}

module.exports = convertToObject;
