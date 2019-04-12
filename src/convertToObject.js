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
  let arr = sourceString.split(';');
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].split(':')[0] && arr[ i ].split(':')[1]) {
      obj[arr[ i ].split(':')[0].trim()] = arr[ i ].split(':')[ 1 ].trim();
    }
  }
  return obj;
}

module.exports = convertToObject;
