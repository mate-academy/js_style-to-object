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
  return sourceString
    .split(';')
    .reduce((style, element) => {
      const [styleName, styleValue] = element.split(':');

      if (styleValue) {
        style[styleName.trim()] = styleValue.trim();
      }

      return style;
    }, {});
}

module.exports = convertToObject;
