'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  const transform = sourceString
    .split(';')
    .map(line => line.split(':'))
    .filter(item => item.length > 1);

  for (const [a, b] of transform) {
    obj[a.trim()] = b.trim();
  }

  return obj;
}

module.exports = convertToObject;
