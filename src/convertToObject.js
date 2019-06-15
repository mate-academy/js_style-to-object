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
  const separatedString = sourceString
    .substring(3, sourceString.length - 2)
    .split(';\n  ');

  const styleObject = {};

  for (let i = 0; i < separatedString.length; i++) {
    separatedString[i] = separatedString[i].split(': ');
    styleObject[separatedString[i][0]] = separatedString[i][1];
  }

  return styleObject;
}

module.exports = convertToObject;
