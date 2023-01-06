'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyles = {};

  sourceString
    .split(';')
    .map(item => item.trim())
    .filter(item => item.indexOf(':') !== -1)
    .forEach(item => {
      const [key, value] = item.split(':');

      cssStyles[key.trim()] = value.trim();
    });

  return cssStyles;
}

module.exports = convertToObject;
