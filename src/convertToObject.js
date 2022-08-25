'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (
 * see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (
 * see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  const arr = sourceString.split(';')
    .map((el) => el.split(':'))
    .filter(el => el.length === 2);

  arr.forEach(([key, value]) => {
    obj[key.trim()] = value.trim();
  });

  return obj;
}

module.exports = convertToObject;
