'use strict';

/**
 * Implement convertToObject function:
 *
 * and returns an object where CSS properties are keys
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};

  sourceString
    .trim()
    .split('\n')
    .map((value, index) => {
      return value
        .replace(/\s+/g, ' ')
        .trimStart()
        .trimEnd()
        .replace(' :', ':')
        .replace(': ', ':')
        .replace(' ;', '')
        .replace('; ', '')
        .replace(';', '');
    })
    .filter((value) => {
      return value.length > 1;
    })
    .forEach((item) => {
      const keyValue = item.split(':');
      const key = keyValue[0];
      const value = keyValue[1];

      result[key.toString()] = value.toString();
    });

  return result;
}

module.exports = convertToObject;
