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
  let cssStyles = sourceString
    .split(';')
    .map(properties => properties.trim())
    .map(properties => properties.split(':')
      .map(value => value.trim()));

  cssStyles = Object.fromEntries(cssStyles);

  delete cssStyles[''];

  return cssStyles;
}

module.exports = convertToObject;
