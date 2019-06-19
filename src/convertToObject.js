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
  const result = {};
  // write your code here
  sourceString.split(';')
    .map(rule => rule.trim())
    .filter(Boolean)
    .map(rule => rule.split(':'))
    .forEach(pair => {
      const key = pair[0].trim();
      const value = pair[1].trim();

      result[key] = value;
    });
  return result;
}

module.exports = convertToObject;
