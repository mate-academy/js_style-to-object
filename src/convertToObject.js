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
  const cssObject = sourceString
    .split(';')
    .reduce((obj, pair) => {
      const [key, value] = pair
        .trim()
        .split(':')
        .map((item) => item.trim());

      if (key && value) {
        obj[key] = value;
      }

      return obj;
    }, {});

  return cssObject;
}

module.exports = convertToObject;
