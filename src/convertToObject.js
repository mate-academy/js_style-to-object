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
  const styles = {};
  const property
    = sourceString
      .split(';')
      .map(style => style.split(':'))
      .filter(style => style.length === 2)
      .map(style => style.map(value => value.trim()));

  property.forEach(style => {
    styles[style[0]] = style[1];
  });

  return styles;
}

module.exports = convertToObject;
