'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
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

  const styleArray = sourceString.split(';\n')
    .map((style) => {
      return style.trim().split(':').map((string) =>
        string.trim());
    })
    .filter((style) => style.length === 2);

  const result = {};

  styleArray.forEach((array) => {
    result[array[0]] = array[1];
  });

  return result;
}

module.exports = convertToObject;
