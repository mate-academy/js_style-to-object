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
  let strArray = sourceString.replace(/;/g, '').split('\n');
  const result = {};

  strArray = strArray
    .map(item => item.trim())
    .filter(item => (item.length > 0))
    .map(item => item.split(':'));

  for (const item of strArray) {
    result[item[0].trim()] = item[1].trim();
  }

  return result;
}

module.exports = convertToObject;
