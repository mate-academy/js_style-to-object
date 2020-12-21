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
  const stylesObj = {};
  const sourceStringArr = sourceString.split('\n').join('').split(';')
    .map(item => item.split(':')).filter(item => item.length > 1)
    .map(item => item.map(part => part.trim()));

  for (let i = 0; i < sourceStringArr.length; i++) {
    stylesObj[sourceStringArr[i][0]] = sourceStringArr[i][1];
  }

  return stylesObj;
}

module.exports = convertToObject;
