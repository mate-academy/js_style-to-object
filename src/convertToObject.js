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
  const testObj = {};
  let key = '';
  let keyValue = '';
  const newStr = sourceString.split(':').join(';');
  const testArr = newStr.split(';');
  for (let i = 0; i < testArr.length - 1; i += 2) {
    key = testArr[i].trim();
    keyValue = testArr[i + 1].trim();
    testObj[key] = keyValue;
  }
  return testObj;
}

module.exports = convertToObject;
