'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};

  const stringsArr = sourceString
    .split(';')
    .map((element) => element.trim())
    .filter((lines) => lines !== '' && lines !== ';')
    .map((line) => line.split(':'))
    .map((parts) => {
      return parts.map((part) => part.trim().replaceAll(';', ''));
    });

  for (let i = 0; i < stringsArr.length; i++) {
    result[stringsArr[i][0]] = stringsArr[i][1];
  }

  return result;
}
module.exports = convertToObject;
