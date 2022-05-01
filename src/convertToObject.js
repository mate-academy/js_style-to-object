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
  const arr = sourceString.split(';');

  const arr1 = [];
  const objectResult = {};

  arr.forEach((str) => {
    const str1 = str.split(':');

    arr1.push(str1);
  });

  arr1.forEach((str) => {
    const key = str[0].trim();

    objectResult[key] = typeof str[1] === 'string' ? str[1].trim() : '';
  });

  for (const key in objectResult) {
    if (key.length === 0 && objectResult[key].length === 0) {
      delete objectResult[key];
    }
  }

  return objectResult;
}

module.exports = convertToObject;
