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
  const result = {};
  const baseArr = sourceString.trim().split(';');
  for (let i = 0; i < baseArr.length; i++) {
    const [key, value] = baseArr[i].trim().split(': ');
    result[key] = value;
  }
  return result;
}

module.exports = convertToObject;
