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
  const obj = {};
  let arr = sourceString.replace(/\n/g, '').split(';');
  arr.pop()

  arr = arr.map((el) => el.split(':'))

  for (let i = 0; i < arr.length; i++) {
    const key = arr[i][0].trim();
    const value = arr[i][1].trim();

    obj[key] = value;
  }

  return obj;
}
module.exports = convertToObject;
