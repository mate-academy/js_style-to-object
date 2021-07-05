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
  const splittedStyles = sourceString.split(';');

  const properties = splittedStyles.filter(style => style.includes(':'))
    .map(style => style.split(':'));

  const styles = properties.reduce((previusProperty, [key, value]) => ({
    ...previusProperty,
    [key.trim()]: value.trim(),
  }), {});

  return styles;
}

module.exports = convertToObject;
