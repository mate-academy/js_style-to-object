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
  return sourceString
    .split(';')
    .reduce((objWithCSS, style) => {
      const [property, value] = style.trim().split(':');

      if (value) {
        return {
          ...objWithCSS,
          [property.trim()]: value.trim(),
        };
      }

      return {
        ...objWithCSS,
      };
    }, {});
}

module.exports = convertToObject;
