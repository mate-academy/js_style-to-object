'use strict';

/* *
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const clearCSS = {};

  const styleCSS = sourceString
    .split(';')
    .map(element => element.split(':'))
    .filter(element => element.length === 2)
    .map(element => element.map(elementValue => elementValue.trim()));

  styleCSS.forEach(element => {
    clearCSS[element[0]] = element[1];
  });

  return clearCSS;
}

module.exports = convertToObject;
