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
  const object = {};
  const array = sourceString.replace(/\n/g, '').split(';');

  for (let i = 0; i < array.length - 1; i++) {
    const resultArray = array[i].trim().split(':');
    object[resultArray[0]] = resultArray[1].trim();
  }

  return object;
}

module.exports = convertToObject;
