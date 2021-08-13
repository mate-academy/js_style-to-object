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
  const formatString = sourceString
    .split(';')
    .map(property => property.trim().split(':'))
    .filter(property => property.length === 2);

  const cssObj = {};

  for (const key of formatString) {
    cssObj[key[0].trim()] = key[1].trim();
  }

  return cssObj;
}

module.exports = convertToObject;
