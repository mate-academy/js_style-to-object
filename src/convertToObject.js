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
  const convert = sourceString
    .split(';')
    .map(prop => prop.split(':'))
    .filter(prop => prop.length > 1)
    .map(prop => [prop[0].trim(), prop[1].trim()]);

  const result = {};

  for (const prop of convert) {
    result[prop[0]] = prop[1];
  }

  return result;
}

module.exports = convertToObject;
