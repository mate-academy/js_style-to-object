'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const pairs = sourceString.split(';');

  const result = {};

  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split(':');

    if (pair.length === 2) {
      const key = pair[0].trim();
      const value = pair[1].trim();

      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
