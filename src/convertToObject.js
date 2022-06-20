'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
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
  const styles = sourceString
    .split(';')
    .map(str => str.trim()
      .split(':'))
    .filter(arr => arr.length > 1)
    .map(item => [item[0].trim(), item[1].trim()]);

  const result = Object.fromEntries(styles);

  return result;
}

module.exports = convertToObject;
