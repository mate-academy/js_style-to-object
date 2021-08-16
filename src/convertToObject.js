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
  const object = {};

  sourceString
    .split(';')
    .map(string => string.trim())
    .filter(string => string.length > 0)
    .forEach(string => {
      object[string.split(':')[0].trim()] = string.split(':')[1].trim();
    });

  return object;
}

module.exports = convertToObject;
