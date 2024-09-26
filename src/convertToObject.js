'use strict';

/**
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
