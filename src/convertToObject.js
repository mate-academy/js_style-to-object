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
  const cssObj = {};

  sourceString
    .split(';')
    .filter(value => value.trim())
    .map(value => value.split(':'))
    .forEach(value => (cssObj[value[0].trim()] = value[1].trim()));

  return cssObj;
}

module.exports = convertToObject;
