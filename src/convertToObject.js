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
  const styleElements = sourceString.split(';')
    .map(element => element.split(':'))
    .map(property => property.map(element => element.trim()))
    .filter(element => element.length === 2);

  const style = {};

  for (const element of styleElements) {
    style[element[0]] = element[1];
  }

  return style;
}

module.exports = convertToObject;
