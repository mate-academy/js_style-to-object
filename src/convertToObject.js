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
  const cssArr = sourceString.trim().split(';');
  const cssObj = {};

  for (let i = 0; i < cssArr.length; i++) {
    let cssArrNew = cssArr[i].trim().split(': ');
    cssObj[cssArrNew[0]] = cssArrNew[1];
    cssArrNew = [];
  }

  return cssObj;
}

module.exports = convertToObject;
