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
  const cssObject = {};

  sourceString.split(';')
    .filter(str => str.trim())
    .map(str => str.split(':'))
    .map(str => (cssObject[str[0].trim()] = str[1].trim()));

  return cssObject;
}

module.exports = convertToObject;
