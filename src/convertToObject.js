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

  sourceString
    .split(';')
    .filter(styleElement => styleElement.trim())
    .map(styleElement => styleElement.split(':'))
    .map(styleElement => (
      cssObject[styleElement[0].trim()] = styleElement[1].trim()));

  return cssObject;
}

module.exports = convertToObject;
