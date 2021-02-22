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
  const styles = {};

  const expressions = sourceString.split(';');
  const properties = expressions.map(expression =>
    expression.split(':').map(property =>
      property.trim()));

  for (const property of properties) {
    if (property[1] !== undefined) {
      styles[property[0]] = property[1];
    }
  }

  return styles;
}

module.exports = convertToObject;
