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
  const arraySourceString = sourceString.split(';')
    .filter(element => !!element.trim());

  const result = {};

  const arrayProperties = arraySourceString.map(property => property.split(':')
    .map(value => value.trim()));

  for (const cssPair of arrayProperties) {
    result[cssPair[0]] = cssPair[1];
  }

  return result;
}

module.exports = convertToObject;
