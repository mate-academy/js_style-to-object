'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArray = sourceString.trim().split(';');

  const cssObject = sourceArray.reduce((css, style) => {
    if (style.trim()) {
      const [property, value] = style.split(':');

      css[property.trim()] = value.trim();
    }

    return css;
  }, {});

  return cssObject;
}

module.exports = convertToObject;
