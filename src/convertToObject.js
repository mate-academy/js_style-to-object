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

  stringToArr = stringToArr
    .map(stringToArrElem => stringToArrElem
      .map(elem => elem.trim())
    );

  const styleObj = {};

  for (const style of stringToArr) {
    if (style.length === 2) {
      styleObj[style[0]] = style[1];
    }
  }

  return styleObj;
}

module.exports = convertToObject;
