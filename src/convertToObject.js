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
  return Object.fromEntries(
    sourceString
      .split('\n')
      .map((style) => style.substring(0, style.length - 1))
      .filter((style) => style.length > 2)
      .map((style) => style.split(':').map((value) => value.trim()))
  );
}

module.exports = convertToObject;
