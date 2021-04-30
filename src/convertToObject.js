'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';')
    .map(el => el.split(':'))
    .map(arr => arr.map(el => el.trim()))
    .filter(el => el[0].length >= 1)
    .forEach(arr => {
      result[arr[0]] = arr[1];
    });

  return result;
}

module.exports = convertToObject;
