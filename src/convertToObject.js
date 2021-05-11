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
  // write your code here
  const result = {};
  const stylesData = sourceString
    .split(';')
    .map(style => style.trim().split(': '));

  for (const style of stylesData) {
    if (style.length > 1) {
      result[style[0].trim()] = style[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
