'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceObj = {};
  const sourceArr = sourceString.split(';');
  sourceArr.length = sourceArr.length - 1;

  for (let i = 0; i < sourceArr.length; i++) {
    const intermidiateArr = sourceArr[i].trim().split(': ');
    sourceObj[intermidiateArr[0]] = intermidiateArr[1];
  }

  return sourceObj;
}

module.exports = convertToObject;
