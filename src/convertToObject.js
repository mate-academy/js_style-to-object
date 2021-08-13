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
  const properties = sourceString
    .split(';')
    .map(propArray => propArray.split(':'))
    .filter(propArray => propArray.length > 1);
  const convertedStyles = {};

  properties.forEach(property => {
    convertedStyles[property[0].trim()] = property[1].trim();
  });

  return convertedStyles;
}

module.exports = convertToObject;
