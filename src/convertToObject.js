'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  const styleObject = {};
  const pairs = sourceString.split(';');

  const parsedPairs = pairs
    .map((str) => str.split(':'))
    .filter((el) => {
      return el[0].trim() !== '';
    });

  parsedPairs.forEach(([key, value]) => {
    if (key.trim() && value.trim()) {
      styleObject[key.trim()] = value.trim();
    }
  });

  return styleObject;
}

module.exports = convertToObject;
