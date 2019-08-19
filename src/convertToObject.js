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
  const strToObj = {};
  const strToArr = sourceString.split(';');
  for (let i = 0; i < strToArr.length; i++) {
    const tempArr = strToArr[i].trim().split(': ');
    strToObj[tempArr[0]] = tempArr[1];
  }
  return strToObj;
}

module.exports = convertToObject;
