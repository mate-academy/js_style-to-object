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
  const cssObject = {};

  const cssStyles = sourceString
    .split(';')
    .map(element => element.split(':'))
    .filter(element => element.length === 2)
    .map(element => element.map(elementValue => elementValue.trim()));

  cssStyles.forEach(element => {
    cssObject[element[0]] = element[1];
  });

  return cssObject;
}

module.exports = convertToObject;
