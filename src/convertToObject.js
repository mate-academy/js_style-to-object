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
  let arr = sourceString.split(';');

  arr = arr.map(string => string.trim());
  arr = arr.map(string => string.split(':'));
  arr = arr.map(string => string.map((value) => value.trim()));

  const arr1 = arr.filter(string => string.length > 1);

  for (const string of arr1) {
    result[string[0]] = string[1];
  }

  return result;
}

module.exports = convertToObject;
