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
  const arrayOfProperties = sourceString.split('\n');
  const arrayOfValidProperties = arrayOfProperties
    .map(property => property.split(';'))
    .filter(property => property[0].length > 3)
    .map(property => property.join('').split(':'))
    .map(value => [value[0].trim(), value[1].trim()]);

  const styles = {};

  for (let i = 0; i < arrayOfValidProperties.length; i++) {
    styles[arrayOfValidProperties[i][0]] = arrayOfValidProperties[i][1];
  }

  return styles;
}

module.exports = convertToObject;
