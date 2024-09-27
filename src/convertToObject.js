'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const propsObj = {};
  const propsArr = sourceString.split(';');

  for (let i = 0; i < propsArr.length - 1; i++) {
    const splittedArr = propsArr[i].trim().split(': ');
    propsObj[splittedArr[0]] = splittedArr[1];
  }
  return propsObj;
}
module.exports = convertToObject;
