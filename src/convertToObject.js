/* eslint-disable no-console */
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
  // console.log(sourceString);

  const parametrsObj = {};

  const sourseToArr = sourceString
    .split(';')
    .map(item => item.trim())
    .filter(el => el.length !== 0);

  sourseToArr.forEach(item => {
    const keyAndValue = item.split(':');
    const correctKey = keyAndValue[0].trim();
    const correctValue = keyAndValue[1].trim();

    parametrsObj[correctKey] = correctValue;
  });

  return parametrsObj;
}

module.exports = convertToObject;
