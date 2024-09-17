'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split(';');
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    let split = arr[i].split(':');
    let key = split[0];
    let val = split[1];
    if (key && val) {
      obj[key.trim()] = val.trim();
    }
  }
  return obj;
}

module.exports = convertToObject;
