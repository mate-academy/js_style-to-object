'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (
 * see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const obj = {};

  sourceString
    .split(';')
    .map(key => key
      .trim())
    .reduce((accumulator, style) => {
      const [key, value] = style.split(':').map(a => a.trim());

      if (key && value) {
        obj[key] = value;
      }
    }, 0);

  return obj;
}
module.exports = convertToObject;
