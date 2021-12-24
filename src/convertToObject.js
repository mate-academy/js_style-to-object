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
  const stylesArray = sourceString
    .split(';')
    .map(string => string.trim())
    .filter(element => element.length > 1)
    .map(item => item.split(':')
      .map(string => string.trim()));

  return Object.fromEntries(stylesArray);
}

module.exports = convertToObject;
