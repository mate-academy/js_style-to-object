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
  return sourceString.split(';')
    .map(rule => rule.trim())
    .filter(Boolean)
    .map(rule => rule.split(':'))
    .reduce(
      (result, pairs) => {
        const key = pairs[0].trim();
        const value = pairs[1].trim();

        result[key] = value;

        return result;
      },
      {}
    );
}

module.exports = convertToObject;
