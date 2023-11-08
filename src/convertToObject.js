'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const arrFromString = sourceString.trim().split(';');

  arrFromString.forEach(el => {
    const pair = el
      .split(':')
      .map(item => item.trim());

    const key = pair[0];
    const value = pair[1];

    if (key && value) {
      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
