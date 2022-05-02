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
  const obj = {};
  const str = sourceString.split(';');

  for (let i = 0; i < str.length; i++) {
    const firstPart = str[i].split(':');

    if (firstPart.length === 2) {
      obj[firstPart[0].trim()] = firstPart[1].trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
