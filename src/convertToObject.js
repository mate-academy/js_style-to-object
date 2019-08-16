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
  const sourceStringNned = sourceString.replace(/\n/g, '');
  const obj = {};
  const arr = sourceStringNned.split(';');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      const item1 = arr[i].split(':');
      const item = item1.trim();
      obj[item[0]] = item[1];
    }
  }
  return obj;
}
module.exports = convertToObject;
