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
  const result = {};

  sourceString.split(';')
    .map(rule => rule.split(':'))
    .filter(pair => pair.length === 2)
    .forEach((pair) => {
      const key = pair[0].trim();
      const val = pair[1].trim();

      result[key] = val;
    });

  return result;
}

module.exports = convertToObject;
