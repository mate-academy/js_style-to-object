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
  const stylesProperties = {};

  const splitedProperty = sourceString.split(';');

  const filtered = splitedProperty
    .map(item => item.split(':'))
    .filter(item => item.length === 2);

  filtered.map(item => (stylesProperties[item[0].trim()] = item[1].trim()));

  return stylesProperties;
}

module.exports = convertToObject;
