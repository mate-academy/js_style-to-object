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
  const obj = {};
  const arr = sourceString.split(';');
  for (let i = 0; i < arr.length - 1; i++) {
    const item = arr[i].trim().split(': ');
    obj[item[0]] = item[1];
  }
  return obj;
}

module.exports = convertToObject;
