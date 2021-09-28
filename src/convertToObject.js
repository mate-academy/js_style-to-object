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
  const styleObj = sourceString.split(';')
    .map(el => el.split(':'))
    .filter(el => el.length === 2)
    .map(([key, value]) => [key.trim(), value.trim()]);

  return Object.fromEntries(styleObj);
}

module.exports = convertToObject;
