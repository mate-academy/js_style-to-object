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
  const objectOfStyles = {};

  sourceString.split(';')
    .filter(element => element.trim())
    .map(element => element.split(':'))
    .forEach(element =>
      (objectOfStyles[element[0].trim()] = element[1].trim()));

  return objectOfStyles;
}

module.exports = convertToObject;
