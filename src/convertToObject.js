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
  const stringToArr = sourceString.split(':').join(';').split(';')
    .map(item => item.trim());
  const cssRules = {};

  for (let i = 0; i < stringToArr.length; i++) {
    if (stringToArr[i] !== '') {
      cssRules[stringToArr[i]] = stringToArr[i + 1];
      i++;
    }
  }

  return cssRules;
}

module.exports = convertToObject;
