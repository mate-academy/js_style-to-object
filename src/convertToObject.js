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
  const css = {};

  sourceString.split(';')
    .filter((el) => el.trim())
    .map((el) => el.split(':'))
    .map((el) => (css[el[0].trim()] = el[1].trim()));

  return css;
}

module.exports = convertToObject;
