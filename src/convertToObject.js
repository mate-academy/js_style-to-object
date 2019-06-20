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
  const properties = sourceString.split(';')
    .map(item => item.trim().split(':'));
  const result = {};
  properties.forEach(elem => {
    if (elem[1]) {
      result[elem[0].trim()] = elem[1].trim();
    }
  });
  return result;
  // write your code here
}
module.exports = convertToObject;
