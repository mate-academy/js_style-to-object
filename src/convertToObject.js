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
  const slittedString = sourceString.split(';');
  const newArr = {};
  for (let i = 0; i < slittedString.length; i++) {
    if (slittedString[i].length > 1) {
      const line = slittedString[i].split(':');
      const key = line[0].trim();
      newArr[key] = line[1].trim();
    }
  }
  return newArr;
}

module.exports = convertToObject;
