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

  sourceString
    .split(';')
    .map(property => property.trim())
    .filter(property => property.length > 1)
    .map(property => property.split(':'))
    .map(property => {
      result[property[0].trim()] = property[1].trim();
    });

  return result;
}

module.exports = convertToObject;
