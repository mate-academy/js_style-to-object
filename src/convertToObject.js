'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  const arr = sourceString.trim().slice(0, -1).split(';');
  const arr1 = [];
  const result = {};

  arr.forEach((str, index) => {
    if (str.length > 1) {
      arr1[index] = str.replace(/\s+/g, ' ').replace(' :', ':').trim();
    }
  });

  arr1.forEach((element) => {
    if (element.length > 1) {
      const key = element.split(': ')[0];
      const value = element.split(': ')[1];

      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
