'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const res = sourceString
    .split(';')
    .filter(item => item.includes(':'))
    .map(keyVal => {
      return keyVal
        .split(':')
        .map(val => val.trim());
    })
    .reduce((acc, elem) => ({
      ...acc,
      [elem[0]]: elem[1],
    }), {});

  return res;
}

module.exports = convertToObject;
