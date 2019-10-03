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
  const stylesArr = sourceString.trim().split(';');
  stylesArr.pop();
  const stylesObj = {};

  stylesArr.forEach((property) => {
    const keyAndValue = property.split(':');
    const key = keyAndValue[0].trim();
    const value = keyAndValue[1].trim();
    stylesObj[key] = value;
  });

  return stylesObj;
}

module.exports = convertToObject;
