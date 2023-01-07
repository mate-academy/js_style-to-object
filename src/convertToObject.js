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
  // write your code here
  const stylesObj = {};
  const stylesArr = sourceString.split(';');
  const clearStyles = stylesArr
    .map(style => style.trim().split(':'))
    .filter(style => style[0] !== '');

  clearStyles.forEach(style => (stylesObj[style[0].trim()] = style[1].trim()));

  return stylesObj;
}

module.exports = convertToObject;
