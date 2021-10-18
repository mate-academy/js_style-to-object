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
    .map(element => element.trim())
    .filter(element => element !== '')
    .map(element => element.split(':'))
    .map(element => element.map(subEl => subEl.trim()))
    .map(function(element) {
      result[element[0]] = element[1];

      return element;
    });

  return result;
}

module.exports = convertToObject;
