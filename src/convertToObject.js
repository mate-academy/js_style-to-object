'use strict';

const stylesString = require('./stylesString');

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const arr = sourceString.split(';');
  const obj = {};
  for (let i = 0; i < arr.length - 1; i++) {
    const prop = arr[i].split(':');
    const key = prop[0].trim();
    const value = prop[1].trim();
    obj[key] = value;
  }
  return obj;
}

convertToObject(stylesString);

module.exports = convertToObject;
