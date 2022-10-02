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
  const styleArray = sourceString
    .trim()
    .split(';')
    .map(item => item.split(':'))
    .map(item => item.map(element => element.trim()))
    .filter(item => item.length !== 1);

  const styleObject = Object.fromEntries(styleArray);

  return styleObject;
}

module.exports = convertToObject;
