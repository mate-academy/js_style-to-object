'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';')
    .reduce((cssObject, style) => {
      const splittedStyle = style.trim().split(':');
      const key = splittedStyle[0];
      const value = splittedStyle[1];

      if (value) {
        cssObject[key.trim()] = value.trim();
      }

      return cssObject;
    }, {});
}

module.exports = convertToObject;
