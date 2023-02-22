'use strict';

/**
 * Implement convertToObject function:
 *
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
  // write your code here
  const obj = {};
  const res = sourceString.split(';')
    .map(data => data.split(':').map(val => val.trim()));

  res.map((ar) => {
    if (ar.length !== 1) {
      obj[ar[0]] = ar[1];
    }
  });

  return obj;
}

module.exports = convertToObject;
