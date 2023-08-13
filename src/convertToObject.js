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
  const obj = {};

  sourceString
    .split(';')
    .filter(row => row.includes(':'))
    .map(row => row.split(':'))
    .map(rule => {
      rule[0] = rule[0].trim();
      rule[1] = rule[1].trim();

      return rule;
    })
    .forEach(rule => {
      obj[rule[0]] = rule[1];
    });

  return obj;
}

module.exports = convertToObject;
