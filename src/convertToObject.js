'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see
 * an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objectOfStyles = {};
  const arrayOfStyles = sourceString
    .split(';')
    .map(style => style.split(':'));

  arrayOfStyles.forEach(style => {
    if (style.length > 1) {
      const key = style[0].trim();
      const value = style[1].trim();

      objectOfStyles[key] = value;
    }
  });

  return objectOfStyles;
}

module.exports = convertToObject;
