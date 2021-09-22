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
  const stylesObj = {};
  const stylesArr = sourceString.split(';').map(pair => pair.split(':'));

  stylesArr.forEach(convert);

  function convert(pair) {
    if (pair.length === 2) {
      stylesObj[pair[0].trim()] = pair[1].trim();
    }
  }

  return stylesObj;
}
module.exports = convertToObject;
