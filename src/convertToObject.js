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
  const result = {};

  sourceString
    .split(';')
    .map(pairs => pairs.split(':'))
    .filter(pair => pair.length === 2)
    .reduce((properties, values) => {
      properties[values[0].trim()] = values[1].trim();

      return properties;
    }, result);

  return result;
}

module.exports = convertToObject;
