'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .map((line) => line.split(':'))
    .map((parts) => parts.map((part) => part.trim()))
    .filter((parts) => parts.length === 2)
    .forEach((parts) => {
      result[parts[0]] = parts[1];
    });

  return result;
}

module.exports = convertToObject;
