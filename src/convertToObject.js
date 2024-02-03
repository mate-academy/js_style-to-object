'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(';')
    .reduce((acc, current) => {
      const [key, value]
      = current.split(':')
        .map((part) => part.trim());

      if (key !== '' && value !== '') {
        acc[key] = value;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
