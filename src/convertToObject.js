'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const css = sourceString.split(';');
  const cssObject = {};

  css.filter(str => str.trim().length > 1)
    .map(str => {
      const [key, value] = str.split(':');

      cssObject[key.trim()] = value.trim();
    });

  return cssObject;
}

module.exports = convertToObject;
