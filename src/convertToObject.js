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

  cssString = cssString.map(element => element.trim());
  cssString = cssString.map(element => element.split(':'));
  cssString = cssString.map(element => element.map(str => str.trim()));
  cssString = cssString.filter(element => element[0] !== '');

  for (const data of cssString) {
    object[data[0]] = data[1];
  }

  return object;
}

module.exports = convertToObject;
