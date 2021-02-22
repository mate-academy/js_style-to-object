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
  const splittedStyles = sourceString
    .split(';');
  const trimmedStyles = splittedStyles
    .map(item => item.split(':')
      .map(prop => prop.trim()));

  const finalStyles = {};

  for (const key of trimmedStyles) {
    if (key.length > 1) {
      finalStyles[key[0]] = key[1];
    }
  }

  return finalStyles;
}

module.exports = convertToObject;
