'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item !== '')
    .map((item) => item.split(':'))
    .map((item) => item.map((item1) => item1.trim()));

  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i][0]] = arr[i][1];
  }

  return obj;
}

module.exports = convertToObject;
