'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 *
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const array = sourceString.trim().split(';');
  const obj = {};

  for (let i = 0; i < array.length; i++) {
    const arrayIn = array[i].trim().split(':');

    if (arrayIn[0] !== '') {
      const key = arrayIn[0].trim();
      const value = arrayIn[1].trim();

      obj[key] = value;
    }
  }

  return obj;
}

module.exports = convertToObject;
