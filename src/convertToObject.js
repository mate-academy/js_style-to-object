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
  const properties = {};

  sourceString.split(';')
    .map((line) => line.split(':'))
    .filter((element) => element.length > 1)
    .forEach(function(property) {
      properties[property[0].trim()] = property[1].trim();
    });

  return properties;
}

module.exports = convertToObject;
