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
  const obj = {};
  const arr = sourceString.split('\n  ');
  for (let i = 1; i < arr.length; i++) {
    let withOutSemiColon = arr[i].replace(';', '');
    withOutSemiColon = withOutSemiColon.replace('\n', '');
    const objKey = withOutSemiColon.split(': ');
    obj[objKey[0]] = objKey[1];
  }
  return obj;
}

module.exports = convertToObject;
