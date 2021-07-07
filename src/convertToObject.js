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
  const arr = sourceString.split(/;|:/);
  arr.pop();
  const obj = {};
  for (let i = 0; i < arr.length; i += 2) {
    obj[arr[i].trim()] = arr[i + 1].trim();
  }
  return obj;
}

module.exports = convertToObject;
