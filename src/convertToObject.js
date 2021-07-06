'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitted = sourceString.split(';');

  return splitted.filter(
    style => style.includes(':'))
    .map(style => style.split(':'))
    .reduce((acc, style) => {
      const key = style[0].trim();
      const value = style[1].trim();

      acc[key] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
