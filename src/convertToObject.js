'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const cssProperties = sourceString.split(';');
  const cleanedCssProperties = cssProperties
    .map((str) => str.trim())
    .filter((str) => str.length > 0);

  const keyValuePairs = cleanedCssProperties
    .filter((str) => str.includes(':'))
    .map((str) => str.split(':'));

  const keyValuePairsWithoutSpaces = keyValuePairs.map((keyValuePair) => {
    return { [keyValuePair[0].trim()]: keyValuePair[1].trim() };
  });

  const result = Object.assign({}, ...keyValuePairsWithoutSpaces);

  return result;
}

module.exports = convertToObject;
