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
  arr.pop();
  const newObj = {};

  for (let i = 0; i < arr.length; i++) {
    const property = arr[i].trim().split(': ');
    newObj[property[0]] = property[1];
  }

  return newObj;
}

module.exports = convertToObject;
