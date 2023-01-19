'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in
 * [test file](./convertToObject.test.js))
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
