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
  const obj = {};

  const expressions = sourceString.split(';').map(expression =>
    expression.split(':').map(property =>
      property.trim()));

  for (let i = 0; i < expressions.length - 1; i++) {
    if (expressions[i][1] !== undefined) {
      obj[expressions[i][0]] = expressions[i][1];
    }
    continue;
  }

  return obj;
}

module.exports = convertToObject;
