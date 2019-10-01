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
  // write your code here
  const convertingObject = {};
  const sourceArr = sourceString.split(';');
  sourceArr.pop();

  for (const i in sourceArr) {
    const convert = sourceArr[i].trim().split(': ');
    convertingObject[convert[0]] = convert[1];
  }

  return convertingObject;
}

module.exports = convertToObject;
