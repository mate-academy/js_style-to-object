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
  let stringToArr = sourceString.split(';');

  stringToArr = stringToArr.map((elem) => elem.split(':'));

  for (let i = 0; i < stringToArr.length; i++) {
    for (let j = 0; j < stringToArr[i].length; j++) {
      stringToArr[i][j] = stringToArr[i][j].trim();
    }
  }

  const styleObj = {};

  for (const style of stringToArr) {
    if (style.length === 2) {
      styleObj[style[0]] = style[1];
    }
  }

  return styleObj;
}

module.exports = convertToObject;
