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
  const styleObject = {};

  sourceString
    .split(';')
    .filter(str => str.includes(':'))
    .map(str => str.split(':'))
    .forEach((str) => {
      styleObject[str[0].trim()] = str[1].trim();
    });

  return styleObject;
}

module.exports = convertToObject;
