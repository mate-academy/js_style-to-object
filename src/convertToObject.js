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
    .split(';\n')
    .map(item => item
      .split(':')
      .map(element => element
        .trim()));

  for (const [key, value] of STYLE_ARRAY) {
    if (key !== undefined && value !== undefined) {
      STYLE_OBJECT[key] = value;
    }
  }

  return STYLE_OBJECT;
}

module.exports = convertToObject;
