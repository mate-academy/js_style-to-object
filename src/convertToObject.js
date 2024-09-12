'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssArr = sourceString.trim().split(';');
  const cssObj = {};

  for (let i = 0; i < cssArr.length - 1; i++) {
    let cssArrNew = cssArr[i].trim().split(': ');
    cssObj[cssArrNew[0]] = cssArrNew[1];
    cssArrNew = [];
  }

  return cssObj;
}

module.exports = convertToObject;
