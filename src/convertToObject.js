'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of
 * related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitBySem = sourceString.split(';');
  const trimed = splitBySem.map(
    element => element
      .trim()
      .split(':')
      .map(el => el.trim()));
  const converted = {};

  trimed.forEach(([key, value]) => {
    if (value) {
      converted[key] = value;
    }
  });

  return converted;
}

module.exports = convertToObject;
