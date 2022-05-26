'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  // write your code here
  const object = {};
  let cssString = sourceString.split(';');

  cssString = cssString.map(element => element.trim()).map(element =>
    element.split(':')).map(element =>
    element.map(str => str.trim())).filter(element =>
    element[0] !== '');

  for (const [key, value] of cssString) {
    object[key] = value;
  }

  return object;
}

module.exports = convertToObject;
