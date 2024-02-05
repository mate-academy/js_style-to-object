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
  const obj = {};
  let arr = sourceString.split(/[\n:]+/);
  arr.shift();

  arr = arr.map((el) => {
    el = el
      .trim()
      .replace(';', '');
    return el;
  })

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = arr[i + 1];
    i++;
  }

  return obj;
}

module.exports = convertToObject;
