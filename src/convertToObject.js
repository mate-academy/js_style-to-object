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
  let styles = sourceString.trim().split('\n').join('').split(';').slice(0, -1);
  let obj = {};
  for (let i = 0; i < styles.length; i++) {
    let temp = styles[i].trim().split(': ');
    obj[temp[0]] = temp[1];
  }
  return obj;
}

module.exports = convertToObject;
