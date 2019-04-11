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
  let strSplited = sourceString.split(';');
  let cssStyle = {};

  for (let propertie of strSplited) {
    let key = propertie.split(':')[0];
    let val = propertie.split(':')[1];
    if (val !== undefined) {
      cssStyle[key.trim()] = val.trim();
    }
  }
  return cssStyle;
}

module.exports = convertToObject;
