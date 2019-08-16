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
  const cssPropertyObj = {};
  const sortedCssPropsArr = sourceString.replace(/\n {2}/g, '').split(';');

  for (const el of sortedCssPropsArr) {
    const keyAndValue = el.split(': ');

    cssPropertyObj[keyAndValue[0]] = keyAndValue[1];
  }

  return cssPropertyObj;
}
module.exports = convertToObject;
