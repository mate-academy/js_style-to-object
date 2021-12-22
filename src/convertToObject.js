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
  const x = sourceString
    .split(';')
    .map(item => item.trim().split(':'))
    .filter(item => !item.includes(''));

  const result = [];

  for (const item of x) {
    result.push([item[0].trim(), item[1].trim()]);
  }

  return Object.fromEntries(result);
}

module.exports = convertToObject;
