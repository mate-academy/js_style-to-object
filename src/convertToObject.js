/* eslint-disable no-console */
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
  const cssObject = {};

  const propertiesArray = sourceString
    .split(';')
    .map(property => property.split(':'))
    .filter(property => property.length >= 2)
    .map(property => [property[0].trim(), property[1].trim()]);

  propertiesArray.map(element => {
    cssObject[element[0]] = element[1];
  });

  return cssObject;
}

module.exports = convertToObject;
