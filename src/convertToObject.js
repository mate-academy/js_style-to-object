'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};
  const strings = sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  for (const string of strings) {
    const strArr = string.split(':');

    if (strArr[1].trim().length) {
      result[strArr[0].trim()] = strArr[1].trim();
    } else {
      result[strArr[0].trim()] = '';
    }
  }

  return result;
}

module.exports = convertToObject;
