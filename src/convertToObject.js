'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let arr = [];
  const resArr = [];
  const str = sourceString.replace(/\n/g, '');

  arr = str.split(';');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].trim() !== '') {
      resArr.push(arr[i].split(':').map((a) => a.trim()));
    }
  }

  return Object.fromEntries(resArr);
}

module.exports = convertToObject;
