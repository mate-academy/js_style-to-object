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
  const arr = sourceString.split(';')
    .filter(el => el.trim().length > 0)
    .map(el => el.split(':'))
    .map(key => key.map(value => value.trim()));

  const result = {};

  for (const [key, value] of arr) {
    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
