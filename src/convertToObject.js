'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitString = sourceString.split(';');
  const result = {};

  splitString
    .filter((line) => line.includes(':'))
    .map((each) => {
      const parts = each.split(':');
      const key = parts[0].trim();
      const value = parts[1].trim();

      result[key] = value;
    });

  return result;
}

module.exports = convertToObject;
