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
  const objectResult = {};

  for (const rule of sourceString.split(';')) {
    const [key, value] = rule.split(':');

    if (value) {
      objectResult[key.trim()] = value.trim();
    }
  }

  return objectResult;
}

module.exports = convertToObject;
