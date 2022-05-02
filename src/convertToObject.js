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
  let element;
  const obj = {};
  const arr = sourceString.split(';');

  for (let i = 0; i < arr.length; i++) {
    element = arr[i].split(':');

    if (element[0] && element[1]) {
      obj[element[0].trim()] = element[1].trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
