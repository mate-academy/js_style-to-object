'use strict';

/**
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
