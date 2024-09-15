'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const strToObj = {};
  const strToArr = sourceString.split(';');

  for (let i = 0; i < strToArr.length - 1; i++) {
    const tempArr = strToArr[i].trim().split(': ');
    strToObj[tempArr[0]] = tempArr[1];
  }

  return strToObj;
}

module.exports = convertToObject;
