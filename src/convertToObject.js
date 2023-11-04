'use strict';
/* eslint-disable */
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
/* eslint-enable */

function convertToObject(sourceString) {
  const result = {};

  const sourseToArray = sourceString.split(';');

  sourseToArray.forEach(style => {
    const [key, value] = style
      .split(':')
      .map(val => val.trim());

    if (key) {
      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
