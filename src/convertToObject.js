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
  const result = {};

  sourceString.split(';')
    .filter(style => style.trim() !== '')
    .map(style => style.trim().split(':'))
    .forEach(([key, value]) => {
      result[key.trim()] = value.trim();
    });

  return result;
}

module.exports = convertToObject;
