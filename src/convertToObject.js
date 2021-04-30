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
  const cssObj = {};
  const result = sourceString
    .split(':')
    .join(';')
    .split(';')
    .map(i => i.trim());

  for (let i = 0; i < result.length; i += 2) {
    if (result[i]) {
      cssObj[result[i]] = result[i + 1];
    }
  }

  return cssObj;
}

module.exports = convertToObject;
