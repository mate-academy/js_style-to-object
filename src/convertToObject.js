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
  const sourceObj = {};
  const sourceArr = sourceString.split('\n  ').join('').split(';');
  sourceArr.length = sourceArr.length - 1;

  for (let i = 0; i < sourceArr.length; i++) {
    const intermidiateArr = sourceArr[i].split(': ');
    sourceObj[intermidiateArr[0]] = intermidiateArr[1];
  }

  return sourceObj;
}

module.exports = convertToObject;
