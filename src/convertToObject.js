'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  const splitString = sourceString.trim().split(';');
  const newStrings = splitString
    .filter((string) => string.includes(':'))
    .map((string) => {
      const parts = string.split(':');

      return [parts[0].trim(), parts[1].trim()];
    });

  return Object.fromEntries(newStrings);
}

module.exports = convertToObject;
