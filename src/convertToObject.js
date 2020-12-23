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
    .map(value => value.split(':'))
    .filter(value => value.length > 1)
    .map(([property, value]) =>
      (result[property.trim()] = value.trim()));

  return result;
}

module.exports = convertToObject;
