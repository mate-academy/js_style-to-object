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
  let newArr = [];
  const obj = {};

  const arr = sourceString.split('\n');
  arr.shift();
  arr.pop();

  for (let x = 0; x < arr.length; x++) {
    newArr = arr[x].split(':');
    obj[newArr[0].trim()] = newArr[1].trim().slice(0, -1);
  }
  return obj;
}

module.exports = convertToObject;
