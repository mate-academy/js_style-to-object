'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are
 * the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const parts = sourceString
    .replace(/:/g, ';')
    .split(';')
    .map(value => value
      .split('')
      .filter(symbol => symbol !== '\n')
      .join('').trim())
    .filter((element) => element !== '');

  const keys = parts
    .filter(value => parts.indexOf(value) % 2 === 0);
  const values = parts
    .filter(value => parts.indexOf(value) % 2 !== 0);

  const convertedObject = {};

  for (let n = 0; n < values.length; n++) {
    convertedObject[keys[n]] = values[n];
  }

  return convertedObject;
}

module.exports = convertToObject;
