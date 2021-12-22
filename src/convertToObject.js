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
  const styleCss = {};

  const filteredString = sourceString
    .split(';')
    .map(style => style.split(':'))
    .filter(style => style.length === 2);

  for (const style of filteredString) {
    styleCss[style[0].trim()] = style[1].trim();
  }

  return styleCss;
}

module.exports = convertToObject;
