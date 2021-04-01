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
  const obj = {};

  sourceString.split(';')
    .map(item => item.split(':'))
    .filter(item => item.length > 1)
    .forEach((item) => {
      const key = item[0].trim();
      const value = item[1].trim();

      obj[key] = value;
    });

  return obj;
}

module.exports = convertToObject;
