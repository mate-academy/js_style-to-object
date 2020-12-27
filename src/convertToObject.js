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
  return sourceString
    .split(';')
    .map(item => item.split(':'))
    .filter(item => item.length > 1)
    .reduce((prev, [key, value]) => ({
      ...prev,
      [key.trim()]: value.trim(),
    }), {});
}
module.exports = convertToObject;
