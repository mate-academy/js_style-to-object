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
  let arrayOfString = sourceString.split(';');
  let cssStyle = {};

  for (let propertie of arrayOfString) {
    let [key, val] = propertie.split(':');
    if (val !== undefined) {
      cssStyle[key.trim()] = val.trim();
    }
  }
  return cssStyle;
}

module.exports = convertToObject;
