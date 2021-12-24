'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertCssToObject = {};

  sourceString
    .split(';')
    .filter(property => property.trim().length > 0)
    .map(property => property.split(':'))
    .forEach(element => {
      convertCssToObject[element[0].trim()] = element[1].trim();
    });

  return convertCssToObject;
}

module.exports = convertToObject;
