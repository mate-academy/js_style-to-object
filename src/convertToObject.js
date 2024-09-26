'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const cssString = sourceString.replace(/\r?\n/g, '');
  const cssArray = cssString.split(';');
  const cssProps = [];
  const cssValues = [];
  const cssObj = {};

  for (let i = 0; i < cssArray.length; i++) {
    if (cssArray[i]) {
      cssProps[i] = cssArray[i].split(':')[0].trim();
      cssValues[i] = cssArray[i].split(':')[1].trim();
      cssObj[cssProps[i]] = cssValues[i];
    }
  }
  return cssObj;
}

module.exports = convertToObject;
