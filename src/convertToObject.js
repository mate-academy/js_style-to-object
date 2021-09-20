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
  const cssObject = {};
  const styleArr = sourceString
    .split(';')
    .map(x => x.split(':').map(y => y.trim()))
    .filter(z => z[0] !== '');

  for (let i = 0; i < styleArr.length; i++) {
    cssObject[styleArr[i][0]] = styleArr[i][1];
  }

  return cssObject;
}

module.exports = convertToObject;
