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
