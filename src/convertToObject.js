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
  const result = {};

  const array = sourceString
    .split(';')
    .map(style => style.trim())
    .filter(style => style !== '');

  array.forEach((style) => {
    const objectStyle = style
      .split(':')
      .map(styleItem => styleItem.trim());

    result[objectStyle[0]] = objectStyle[1];
  });

  return result;
}

module.exports = convertToObject;
