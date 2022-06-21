'use strict';

/* *
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object} */

function convertToObject(sourceString) {
  const arrStyle = sourceString.split(';');

  const normalArrStyle = arrStyle.map(el => el.trim().split(':'))
    .filter(arr => arr.length > 1);

  const object = {};

  for (const key of normalArrStyle) {
    object[key[0].trim()] = key[1].trim();
  }

  return object;
}

module.exports = convertToObject;
