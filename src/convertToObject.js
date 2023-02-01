'use strict';

/**
 * Implement convertToObject function:
 *
 * and returns an object where CSS properties are keys
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssArray = sourceString.split(';')
    .map(line => line.trim())
    .filter(line => line.match('.+:.+') !== null)
    .map(line => line.split(':'))
    .reduce((acc, arr) => {
      acc[arr[0].trim()] = arr[1].trim();

      return acc;
    }, {});

  return cssArray;
}

module.exports = convertToObject;
