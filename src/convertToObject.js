'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
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
