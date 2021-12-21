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
  // write your code here
  const arr = sourceString.split(';');
  const cssStyles = {};

  arr.forEach(item => {
    const tempValue = item.split(':');

    if (tempValue[0] !== undefined && tempValue !== undefined) {
      cssStyles[tempValue[0].trim()] = tempValue[1].trim();
    }
  });

  return cssStyles;
}

module.exports = convertToObject;
