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
  let a = [];
  const obj = {};

  for (let i = 0; i < arr.length - 1; i++) {
    a = arr[i].trim().split(': ');
    obj[a[0]] = a[1];
  }
  return obj;
}

module.exports = convertToObject;
