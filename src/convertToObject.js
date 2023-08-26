'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyles = {};

  sourceString.replace(/\n/g, '').split(';')
    .map(element => element.trim())
    .filter(element => element !== '')
    .map(element => element.split(':'))
    .map(element => element.map(el => el.trim()))
    .forEach(([property, value]) => {
      cssStyles[property] = value;
    });

  return cssStyles;
}

module.exports = convertToObject;
