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
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    const arrElements = arr[i].trim().split(': ');
    obj[arrElements[0]] = arrElements[1];
  }

  return obj;
}

module.exports = convertToObject;
