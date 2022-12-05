'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 *  in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const cssStyles = {};

  sourceString
    .split(';')
    .map(elem => elem.split(':'))
    .filter(value => value.length === 2)
    .forEach(value => {
      cssStyles[value[0].trim()] = value[1].trim();
    });

  return cssStyles;
}

module.exports = convertToObject;
