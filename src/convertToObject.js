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
  const result = {};

  const arr = sourceString
    .split(';')
    .map(prop => prop
      .split(':')
      .map(word => word
        .trim())
    );

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length !== 1) {
      result[arr[i][0]] = arr[i][1];
    }
  }

  return result;
}

module.exports = convertToObject;
