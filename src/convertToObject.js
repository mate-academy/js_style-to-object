'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  const STYLE_OBJECT = {};
  const STYLE_ARRAY = sourceString
    .replaceAll('\n', '')
    .split(';')
    .map(item => item
      .split(':')
      .map(element => element
        .trim()))
    .filter(item => item[0] !== '');

  for (const index of STYLE_ARRAY) {
    STYLE_OBJECT[index[0]] = index[1];
  }

  return STYLE_OBJECT;
}

module.exports = convertToObject;
