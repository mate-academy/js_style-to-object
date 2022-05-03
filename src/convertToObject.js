'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objectResult = {};

  const arr = sourceString.split(';').map((key) => key.split(':'));

  arr.forEach((str) => {
    if (str.length > 1) {
      const key = str[0].trim();

      objectResult[key] = typeof str[1] === 'string' ? str[1].trim() : '';
    }
  });

  return objectResult;
}

module.exports = convertToObject;
