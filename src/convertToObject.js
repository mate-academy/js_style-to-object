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
const SEMICOLON_SEPARATOR = ';';
const COLON_SEPARATOR = ':';

function convertToObject(sourceString) {
  return sourceString
    .split(SEMICOLON_SEPARATOR)
    .reduce((styles, currentStyle) => {
      const [key, value] = currentStyle.split(COLON_SEPARATOR);

      if (key && value) {
        styles[key.trim()] = value.trim();
      }

      return styles;
    }, {});
}

module.exports = convertToObject;
