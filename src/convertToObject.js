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
  const styleObject = {};
  const styleStringToArray = sourceString.split(';')
    .map(style => style.split(':').map(val => val.trim()));

  styleStringToArray.map((style) => {
    if (style.length !== 1) {
      styleObject[style[0]] = style[1];
    }
  });

  return styleObject;
}

module.exports = convertToObject;
