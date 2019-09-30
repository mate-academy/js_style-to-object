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
  const arr = sourceString.split(';');
  let arr2 = [];
  const obj = {};

  for (const item of arr) {
    arr2 = item.split(': ');
  }

  for (let i = 0; i < arr.length - 1; i++) {
    arr2 = arr[i].trim().split(': ');
    obj[arr2[0]] = arr2[1];
  }
  return obj;
}

module.exports = convertToObject;
