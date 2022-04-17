'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const newArr = sourceString.replace(/\r?\n/g, '').split('');

  newArr.unshift(';');

  const newObject = {};

  const result = newArr.reduce((arr, sym, index) => sym === ';'
    ? [...arr, index] : sym === ':' ? [...arr, index] : arr, []);

  for (let i = 0; i < result.length - 2; i = i + 2) {
    const key = newArr.slice(result[i] + 1, result[i + 1]);
    const value = newArr.slice(result[i + 1] + 1, result[i + 2]);

    if (!key.join('').trim().length) {
      continue;
    }

    newObject[key.join('').trim()] = value.join('').trim();
  }

  return newObject;
}
module.exports = convertToObject;
