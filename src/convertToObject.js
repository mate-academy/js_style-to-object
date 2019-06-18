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
  const stylesArray = sourceString.trim().split('\n  ');
  const stylesObject = {};
  let keyValueArr = [];
  for (let i = 0; i < stylesArray.length; i++) {
    keyValueArr = stylesArray[i].split(': ');
    keyValueArr[1] = keyValueArr[1].slice(0, keyValueArr[1].length - 1);
    stylesObject[ keyValueArr[0] ] = keyValueArr[1];
  }
  return stylesObject;
}

module.exports = convertToObject;
