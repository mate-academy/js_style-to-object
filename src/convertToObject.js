'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitedString = sourceString
    .split(';')
    .filter(style => style.trim() !== '');
  const styles = splitedString
    .map(style => style.split(':'))
    .reduce((properties, [key, value]) => {
      properties[key.trim()] = value.trim();

      return properties;
    }, {}
    );

  return styles;
}

module.exports = convertToObject;
