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
  const string = sourceString.replace(/;/g, ':').replace(/\n/g, '').split(':');

  const object = {};
  for (let i = 0; i < string.length - 1; i += 2) {
    object[string[i].trim()] = string[i + 1].trim();
  }

  return object;
}

module.exports = convertToObject;
