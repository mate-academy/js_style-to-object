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
  const resultArr = sourceString
    .split(';')
    .map(element => element.split(':'))
    .map(element => element.map(value => value.trim()))
    .filter(element => element.length > 1);

  return resultArr.reduce((prev, current) => ({
    ...prev,
    [current[0]]: current[1],
  }), {});
}

module.exports = convertToObject;
