'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const stylesObj = {};

  const stylesStringToObj = sourceString
    .split(';')
    .map(style => style.split(':'))
    .filter(style => style.length === 2);

  stylesStringToObj.forEach(style => {
    stylesObj[style[0].trim()] = style[1].trim();
  });

  return stylesObj;
}

module.exports = convertToObject;
