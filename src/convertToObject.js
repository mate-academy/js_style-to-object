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
  const stylesArr = sourceString.trim().split(/: |;\s+|;/g);
  const stylesObj = {};
  for (let i = 0; i < stylesArr.length - 1; i++) {
    if (i % 2 === 0 && (i + 1) % 2 !== 0) {
      const property = stylesArr[i];
      const value = stylesArr[i + 1];
      stylesObj[property] = value;
    }
  }

  return stylesObj;
}

module.exports = convertToObject;
