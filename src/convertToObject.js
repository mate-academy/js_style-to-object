'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(';')
    .map((style) => style.split(':').map((s) => s.trim()))
    .filter((styleArray) => styleArray.length === 2)
    .reduce((stylesObject, [key, value]) => {
      stylesObject[key] = value;

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
