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
  const str = sourceString.replace(/\s+/g, ' ');

  const arr = str.split(';')
    .map(rule => rule.split(':'))
    .filter(rule => rule.length > 1);

  const obj = {};

  arr.forEach(function(property) {
    obj[property[0].trim()] = property[1].trim();
  });

  return obj;
}

module.exports = convertToObject;
