'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .map(item => item.split(':'))
    .map(props => props.map(item => item.trim()))
    .forEach(item => {
      if (item[0]) {
        result[item[0]] = item[1];
      }
    });

  return result;
}
module.exports = convertToObject;
