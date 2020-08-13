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

  sourceString
    .split(';')
    .map(key => key
      .split(':')
      .map(element => element.trim()))
    .forEach(element => {
      element[0] && (result[element[0]] = element[1]);
    });

  return result;
}

module.exports = convertToObject;
