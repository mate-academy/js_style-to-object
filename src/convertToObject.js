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
  const preparedStyles = sourceString.split(';')
    .map(style => style.split(':'))
    .map(pair => pair.map(element => element.trim()))
    .filter(style => style.length === 2);

  const styleSheets = {};

  for (const style of preparedStyles) {
    styleSheets[style[0]] = style[1];
  }

  return styleSheets;
}

module.exports = convertToObject;
