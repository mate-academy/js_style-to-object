'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
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
