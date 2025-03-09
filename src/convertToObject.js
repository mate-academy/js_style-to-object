'use strict';

const complexStylesString = require('./stylesString');

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newArr = sourceString
    .replaceAll(':', ';')
    .replaceAll('\n', '')
    .split(';')
    .map((el) => el.trim())
    .filter((el) => el !== '');

  const obj = {};

  for (let i = 0; i <= newArr.length - 1; i += 2) {
    obj[newArr[i]] = newArr[i + 1];
  }

  for (const key in obj) {
    const objValuesSplit = obj[key].split(',');

    if (objValuesSplit.length > 1) {
      obj[key] = objValuesSplit.join(',\n');
    }
  }

  return obj;
}

convertToObject(complexStylesString);

module.exports = convertToObject;
