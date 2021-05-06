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

  sourceString
    .split(';')
    .map(el => {
      return el
        .split(':')
        .map(element => element.trim());
    })
    .map(el => {
      if (el[0]) {
        cssObj[el[0]] = el[1];
      }
    });

  return cssObj;
}

module.exports = convertToObject;
