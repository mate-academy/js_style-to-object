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
  // write your code here
  const obj = {};
  const arr = sourceString.split(';');

  for (let i = 0; i < arr.length; i++) {
    const pair = arr[i].split(':');
    const key = pair[0].trim();
    const val = pair[1] ? pair[1].trim() : '';

    if (key.length > 0) {
      obj[key] = val;
    }
  }

  return obj;
}

module.exports = convertToObject;
