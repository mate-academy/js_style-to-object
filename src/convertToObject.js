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
  const convertCSS = {};
  const stylesArr = sourceString.split(':')
    .join(';')
    .split(';')
    .map(item => item.trim())
    .filter(e => e !== '');

  for (let i = 0; i < stylesArr.length; i += 2) {
    convertCSS[stylesArr[i]] = stylesArr[i + 1];
  }

  return convertCSS;
}

module.exports = convertToObject;
