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
  // write your code here
  const stylesAsObject = {};
  const stylesAsArray = sourceString.split(';')
    .map(element => element
      .trim())
    .filter(element => element.length !== 0)
    .map(element => element
      .split(':')
      .map(item => item
        .trim()));

  for (const style of stylesAsArray) {
    stylesAsObject[style[0]] = style[1];
  }

  return stylesAsObject;
}

module.exports = convertToObject;
