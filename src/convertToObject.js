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

  const arrayFromString = sourceString
    .split(/[:;]/)
    .map(v => v.trim())
    .filter(v => v !== '');

  for (let i = 1; i < arrayFromString.length; i += 2) {
    result[arrayFromString[i - 1]] = arrayFromString[i];
  }

  return result;
}

module.exports = convertToObject;
