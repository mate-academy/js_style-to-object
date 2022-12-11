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
  const final = sourceString
    .split(';')
    .map(string => string.split(':'))
    .map(string => string.map(string2 => string2.trim()))
    .filter(string => string.length > 1)
    .reduce((a, x) => {
      a[x[0]] = x[1];

      return a;
    }, {}
    );

  return final;
}

module.exports = convertToObject;
