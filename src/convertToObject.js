'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const result = {};
  const arr = sourceString.split(' ');

  for (let i = 0; i < arr.length; i += 2) {
    result[arr[i]] = arr[i + 1];
  }

  return result;
}

// convertToObject(string);
// console.log(convertToObject(string));
module.exports = convertToObject;
