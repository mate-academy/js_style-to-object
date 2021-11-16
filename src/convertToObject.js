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
  const properties = sourceString
    .split(';')
    .map(prop => prop.split(':'))
    .filter(prop => prop.length > 1)
    .map(prop => [prop[0].trim(), prop[1].trim()]);

  const css = {};

  for (const prop of properties) {
    css[prop[0]] = prop[1];
  }

  return css;
}

module.exports = convertToObject;
