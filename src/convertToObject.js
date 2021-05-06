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
  return Object.fromEntries(sourceString.split(';')
    .map(style => style.split(':'))
    .filter(style => style.length === 2)
    .map(([key, value]) => [key.trim(), value.trim()]));
}

module.exports = convertToObject;
