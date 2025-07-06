'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const string = sourceString
    .split(';')
    .filter((line) => line.includes(':'))
    .map((line) => [line.split(':')[0].trim(), line.split(':')[1].trim()]);
  const result = Object.fromEntries(string);

  return result;
}

module.exports = convertToObject;
