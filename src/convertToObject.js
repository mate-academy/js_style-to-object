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
  let cssString = sourceString.slice(1);
  const cssObj = {};
  let cssProperty = '';
  let semicolonsIndex = 0;
  let colonIndex = 0;
  let key = '';
  let value = '';
  while (cssString.length !== 0) {
    semicolonsIndex = cssString.indexOf(';');
    cssProperty = cssString.slice(2, semicolonsIndex);
    colonIndex = cssProperty.indexOf(':');
    key = cssProperty.slice(0, colonIndex);
    value = cssProperty.slice(colonIndex + 2);
    cssObj[key] = value;
    cssString = cssString.slice(semicolonsIndex + 2);
  }
  return cssObj;
}

module.exports = convertToObject;
