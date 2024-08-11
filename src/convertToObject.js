'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  let result = {};
  let arr = sourceString.replace(/[;:]/g, ',').split(',');

  for (let i = 0; i < arr.length; i+= 2) {
    result[arr[i]] = arr[(i + 1)];
  }
    
  return result;
}


module.exports = convertToObject;
