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
  for (const i in properties) {
    if (properties[i][1]) {
      result[properties[i][0].trim()] = properties[i][1].trim();
    }
  }
  return result;
  // write your code here
}
console.log(convertToObject('Свойство: значение ; свойство:значение'));
module.exports = convertToObject;
