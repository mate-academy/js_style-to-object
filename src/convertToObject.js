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
  const cssStyles = {};

  sourceString.split(';')
    .filter(item => item.trim())
    .map(item => item.split(':'))
    .map(item => {
      cssStyles[item[0].trim()] = item[1].trim();
    });

  return cssStyles;
}
module.exports = convertToObject;
