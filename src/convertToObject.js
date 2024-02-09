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
  const sourceArray = sourceString.split(';');
  const result = {};

  for (let i = 0; i < sourceArray.length; i++) {
    const element = sourceArray[i].split(':');

    if (element[0] < 1 || element[1].length < 1) {
      continue;
    }

    const key = element[0].trim();
    const value = element[1].trim();

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
