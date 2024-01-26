'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split('\n').join('').split(';');
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    const entry = arr[i].split(':');
    const key = entry[0].trim();

    if (entry[1] !== undefined) {
      const value = entry[1].trim();

      obj[key] = value;
    }
  }

  return obj;
}

module.exports = convertToObject;
