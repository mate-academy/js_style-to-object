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
  const newArr = sourceString
    .split(';')
    .map(style => style.trim())
    .filter(style => style !== '');

  const result = {};

  for (const style of newArr) {
    const resultStyle = style.split(':').map(item => item.trim());

    result[resultStyle[0]] = resultStyle[1];
  }

  return result;
}

module.exports = convertToObject;
