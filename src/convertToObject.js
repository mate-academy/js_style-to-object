'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const separatedString = sourceString
    .trim()
    .slice(0, -1)
    .split(';');

  const styleObject = {};

  for (let i = 0; i < separatedString.length; i++) {
    separatedString[i] = separatedString[i].trim().split(': ');
    styleObject[separatedString[i][0]] = separatedString[i][1];
  }

  return styleObject;
}

module.exports = convertToObject;
