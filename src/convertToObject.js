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
  const newArr = sourceString
  .split(';')
  .map(val => val.trim().split(':'))
  .filter(val => val.length > 1);

  const newObj = {};
  newArr.map((arr) => (newObj[arr[0].trim()] = arr[1].trim()))

  return newObj
}

module.exports = convertToObject;
