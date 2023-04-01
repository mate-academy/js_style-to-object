'use strict';

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
function convertToObject(sourceString) {
  // write your code here

  const splitSource = sourceString.split(';');

  const obj = {};

  for (const key in splitSource) {
    const m = splitSource[key].split(':');

    if (m[1] !== undefined) {
      obj[m[0].trim()] = m[1].trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
