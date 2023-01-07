'use strict';

/**
 * Implement convertToObject function:
 *
 * and returns an object where CSS properties are keys
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedStyles = {};

  sourceString
    .split(';')
    .map(style => style.split(':'))
    .filter(style => style.length > 1)
    .forEach(item => (convertedStyles[item[0].trim()] = item[1].trim()));

  return convertedStyles;
}

module.exports = convertToObject;
