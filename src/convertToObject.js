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
  const cssArr = sourceString.split(';');
  const cssObj = {};

  for (let param of cssArr) {
    param = param.split(':');

    if (param[0] && param[1]) {
      const key = param[0].trim();
      const value = param[1].trim();

      cssObj[key] = value;
    }
  }

  return cssObj;
}

module.exports = convertToObject;
