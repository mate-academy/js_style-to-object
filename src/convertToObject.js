'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const cssStyles = sourceString
    .split(';')
    .map(styles => styles
      .trim()
      .split(':')
      .map(style => style.trim()))
    .filter(style => style.length > 1)
    .reduce((prev, [property, propertyValue]) => {
      return {
        ...prev, [property]: propertyValue,
      };
    }, {});

  return cssStyles;
}

module.exports = convertToObject;
