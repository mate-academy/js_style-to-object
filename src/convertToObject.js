'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return Object.fromEntries(sourceString
    .split(';')
    .map(value => value.split(':'))
    .map(value => value.map(nestedValue => nestedValue.trim()))
    .filter(value => value[0].length !== 0));
}

module.exports = convertToObject;
