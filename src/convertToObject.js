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
  const convertedStyles = {};

  const clearedStyles = sourceString.split(';')
    .map(style => style.split(':')
      .map(property => property.trim()))
    .filter(style => style.length === 2);

  for (const clearedStyle of clearedStyles) {
    convertedStyles[clearedStyle[0]] = clearedStyle[1];
  }

  return convertedStyles;
}

module.exports = convertToObject;
