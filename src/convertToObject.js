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

  sourceString
    .split(';')
    .map(el => el.split(':'))
    .filter(arr => arr.length === 2)
    .map(arr => arr.map(el => el.trim()))
    .forEach(el => {
      result[el[0]] = el[1];
    });

  return result;
}

module.exports = convertToObject;
