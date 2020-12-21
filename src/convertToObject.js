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
  const arr = sourceString.split(';')
    .map(value => value.split(':'))
    .filter(value => value.length > 1)
    .map(([a, b]) => ([a.trim(), b.trim()]));

  const obj = {};

  for (const value of arr) {
    obj[value[0]] = value[1];
  }

  return obj;
}

module.exports = convertToObject;
