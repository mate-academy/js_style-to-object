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
  const keysValues = sourceString
    .split(';')
    .map(style => style.split(':'))
    .filter(pair => pair.length === 2);

  const result = {};

  keysValues.forEach(pair =>
    (result[pair[0].trim()] = pair[1].trim()));

  return result;
}

module.exports = convertToObject;
