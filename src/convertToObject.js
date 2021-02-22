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
  const arrayOfProperties = sourceString.split('\n');
  const replacedSymbols = arrayOfProperties
    .map(string => string.replace(';', ' '))
    .filter(string => string.trim() !== '');
  const trimmedString = replacedSymbols.map(string => string.trim());
  const keys = trimmedString.map(string => string.split(':')[0].trim());
  const values = trimmedString.map(string => string.split(':')[1].trim());
  const result = {};

  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = values[i];
  }

  return result;
}

module.exports = convertToObject;
