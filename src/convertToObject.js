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

  const splitedStyles = sourceString.split(';');
  const properties = splitedStyles.map(expression =>
    expression.split(':').map(property => property.trim()));

  for (const [key, value] of properties) {
    if (value !== undefined) {
      styles[key] = value;
    }
  }

  return styles;
}

module.exports = convertToObject;
