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
  // write your code here
  const arr = sourceString
    .split(';')
    .map(prop => prop.split(':'))
    .map(prop => prop.map(str => str.trim()))
    .filter(str => str[0] !== '');
  const sourceObject = {};

  for (const [key, value] of arr) {
    sourceObject[key] = value;
  }

  return sourceObject;
}

module.exports = convertToObject;
