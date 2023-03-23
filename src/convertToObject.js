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
  const objectWithStyles = {};

  sourceString
    .split(';')
    .map(style => style.trim())
    .filter(style => style !== '')
    .forEach(style => {
      const [styleProperty, styleValue] = style.split(':');

      objectWithStyles[styleProperty.trim()] = styleValue.trim();
    });

  return objectWithStyles;
}

module.exports = convertToObject;
