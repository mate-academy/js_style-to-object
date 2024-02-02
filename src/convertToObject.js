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
  const res = {};

  sourceString.replace(/\n/g, '').split(';').forEach((string) => {
    if (string) {
      const key = string.split(':')[0];
      const value = string.split(':')[1];

      if (key && value) {
        res[key.trim()] = value.trim();
      }
    }
  });

  return res;
}

module.exports = convertToObject;
