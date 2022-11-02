'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const convertedStyles = {};

  const listStyles = sourceString.split(';');

  listStyles.map(style => {
    const keysValues = style.split(':');
    const key = keysValues[0].trim().replace(/ /gi, '');
    const value = keysValues[1];

    if (value !== undefined) {
      convertedStyles[key] = value.trim();
    }
  });

  return convertedStyles;
}

module.exports = convertToObject;
