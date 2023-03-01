'use strict';
/* eslint-disable */
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
  // write your code here
  const resultObj = sourceString
    .split(';')
    .filter(el => el.trim())
    .map((str) => str.split(':'))
    .reduce((acc, item) => {
      return {
        ...acc,
        [item[0].trim()]: item[1].trim(),
      };
    }, {});

  return resultObj;
}

module.exports = convertToObject;
