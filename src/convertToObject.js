'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString.split(';')
    .map(rule => rule.trim().split(':'))
    .filter(rule => rule[0] && rule[1])
    .reduce((acc, v) => ({
      ...acc,
      [v[0].trim()]: v[1].trim(),
    }), {});
}

module.exports = convertToObject;
