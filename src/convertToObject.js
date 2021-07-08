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
  const cssObj = {};
  const arr = sourceString.split(';');

  for (let i = 0; i < arr.length; i++) {
    const style = arr[i].trim().split(': ');
    cssObj[style[0]] = style[1];
  }

  return cssObj;
}

module.exports = convertToObject;
