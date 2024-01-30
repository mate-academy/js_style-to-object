'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyles = sourceString
    .split(';')
    .map(style => style.split(':'));

  return createObjectStyle(cssStyles);
}

function createObjectStyle(cssStyles = []) {
  const objStyles = {};

  cssStyles.forEach(style => {
    if (style.length === 2) {
      objStyles[style[0].trim()] = style[1].trim();
    }
  });

  return objStyles;
}

module.exports = convertToObject;
