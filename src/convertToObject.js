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
  const cssStyles = {};

  sourceString
    .split(';')
    .map(rule => rule.split(':'))
    .forEach(([key, keyValue]) => {
      const keyCopy = key.trim();

      if (keyCopy) {
        cssStyles[keyCopy] = keyValue.trim();
      }
    });

  return cssStyles;
}

module.exports = convertToObject;
