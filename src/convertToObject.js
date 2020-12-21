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
  const cleanProps = sourceString
    .split(';')
    .map(prop => prop.split(':'))
    .filter(x => x.length > 1)
    .map(prop => [prop[0].trim(), prop[1].trim()]);

  const styleSheet = {};

  for (const prop of cleanProps) {
    styleSheet[prop[0]] = prop[1];
  }

  return styleSheet;
}

module.exports = convertToObject;
