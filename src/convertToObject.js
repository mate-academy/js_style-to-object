'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  sourceString
    .split(';')
    .forEach(style => {
      const [key, value] = style
        .split(':')
        .map(s => s.trim());

      if (key && value) {
        styles[key] = value;
      }
    });

  return styles;
}

module.exports = convertToObject;
