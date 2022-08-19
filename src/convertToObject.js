'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
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
  let key = '';
  let value = '';

  sourceString.split(';')
    .filter(style => style.trim())
    .map(style => style.split(':'))
    .forEach(style => {
      key = style[0].trim();
      value = style[1].trim();

      cssStyles[key] = value;
    });

  return cssStyles;
}

module.exports = convertToObject;
