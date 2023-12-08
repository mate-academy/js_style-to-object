'use strict';

/**
 * Implement convertToObject function:
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
  const resultArray = sourceString
    .split(';')
    .map(value => value.split(':')
      .map(item => item.trim()))
    .filter(value => value.length > 1);

  return Object.fromEntries(resultArray);
}

module.exports = convertToObject;
