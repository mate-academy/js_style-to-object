'use strict';

/**
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
      const item = arr[i].split(':');
      obj[item[0].trim()] = item[1].trim();
    }
  }
  return obj;
}
module.exports = convertToObject;
