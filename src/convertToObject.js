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
  // write your code here
  const stringArr = sourceString.split(';');
  const data = {};

  stringArr.forEach(elem => {
    const source = elem.split(':');
    const key = source[0];
    const value = source[1];

    if (key && value) {
      data[key.trim()] = value.trim();
    }
  });

  return data;
}

module.exports = convertToObject;
