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
    .map(each => each.split(':'))
    .filter(pair => pair.length === 2)
    .reduce((arr, [key, value]) => ({
      ...arr,
      [key.trim()]: value.trim(),
    }), {});
}

module.exports = convertToObject;
