'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const obj = {};

  const stringToArray = sourceString.split(';')
    .map(item => item.trim())
    .filter(item => item)
    .map(item => item.split(':'));

  for (const [key, value] of stringToArray) {
    obj[key.trim()] = value.trim();
  }

  return obj;
}

module.exports = convertToObject;
