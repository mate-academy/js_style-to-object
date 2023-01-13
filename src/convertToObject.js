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
  const str = sourceString.trim();
  const arr = str.split(';');
  const result = {};

  arr.forEach(el => {
    const elArr = el.split(':');
    const key = elArr[0] ? elArr[0].trim() : elArr[0];
    const value = elArr[1] ? elArr[1].trim() : elArr[1];

    if (key && value) {
      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
