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
  const styles = {};

  sourceString.split('\n')
    .map((style) => style.trim().replace(';', ''))
    .sort((a, b) => a.localeCompare(b))
    .forEach((style) => {
      if (style) {
        const [key, value] = style.split(':');

        styles[key.trim()] = value.trim();
      }
    });

  return styles;
}

module.exports = convertToObject;
