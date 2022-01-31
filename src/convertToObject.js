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
  const cssStyles = {};

  const arrOfStyles = sourceString
    .split(';')
    .map(style => style.trim())
    .filter(style => style.length > 0)
    .map(
      property => property
        .split(':')
        .map(word => word.trim())
    );

  arrOfStyles.forEach((style) => {
    cssStyles[style[0]] = style[1];
  });

  return cssStyles;
}

module.exports = convertToObject;
