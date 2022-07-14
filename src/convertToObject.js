'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js])
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (exampl in [test file])
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayOfstyles = sourceString.split(';')
    .map(style => style.split(':'))
    .filter(style => style.length === 2)
    .map(style => style.map(styleItem => styleItem.trim()));

  const objectOfStyles = Object.fromEntries(arrayOfstyles);

  return objectOfStyles;
}

module.exports = convertToObject;
