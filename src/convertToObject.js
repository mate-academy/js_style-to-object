'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArr = sourceString.split(';');
  const arr2D = stylesArr.map((style) => style.split(':'));
  const stylesObj = {};

  for (const arr of arr2D) {
    if (arr[1] !== undefined) {
      stylesObj[arr[0].trim()] = arr[1].trim();
    }
  }

  return stylesObj;
}

module.exports = convertToObject;
