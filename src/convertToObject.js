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
  const cssObject = {};

  const stringFormatted = sourceString
    .split(';')
    .map((el) => el.trim().split(':').map((char) => char.trim()).join(':'))
    .filter((item) => item.length > 0)
    .map((el) => el.split(':'));

  for (const array of stringFormatted) {
    cssObject[array[0]] = array[1];
  }

  return cssObject;
}

module.exports = convertToObject;
