'use strict';

/**
 *
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
  const obj = {};
  const arr = sourceString.split(';');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(':')) {
      const items = arr[i].split(':');
      const key = items[0].trim();
      const value = items[1].trim();

      obj[key] = value;
    }
  }

  return obj;
}

module.exports = convertToObject;
