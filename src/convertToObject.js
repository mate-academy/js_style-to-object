'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssPropertyObj = {};
  const sortedCssPropsArr = sourceString.replace(/\n {2}/g, '').split(';');

  sortedCssPropsArr.pop();

  for (const el of sortedCssPropsArr) {
    const keyAndValue = el.split(': ');

    cssPropertyObj[keyAndValue[0]] = keyAndValue[1];
  }

  return cssPropertyObj;
}
module.exports = convertToObject;
