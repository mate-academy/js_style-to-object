'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObject = {};

  sourceString
    .split(';')
    .filter(cssString => cssString.trim().length)
    .forEach(cssString => {
      const cssArray = cssString.split(':');
      const key = cssArray[0].trim();
      const value = cssArray[1].trim();

      cssObject[key] = value;
    });

  return cssObject;
}

module.exports = convertToObject;
