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
  const correctStyles = {};
  const stylesFormatting = sourceString
    .split(';')
    .map(element => element.split(':')
      .map(char => char.trim()))
    .filter(element => element.length > 1);

  stylesFormatting.map(style => (correctStyles[style[0]] = style[1]));

  return correctStyles;
}

module.exports = convertToObject;
