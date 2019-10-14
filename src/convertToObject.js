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
  const style = {};
  const arr = sourceString.split(';');
  for (let i = 0; i < arr.length - 1; i++) {
    const arr2 = arr[i].split(':');
    style[arr2[0].trim()] = arr2[1].trim();
  }
  return style;
}

module.exports = convertToObject;
