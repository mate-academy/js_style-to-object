'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const arr = sourceString.split(';')
    .map(str => str.split(':').map(property => property.trim()))
    .filter(string => string.length > 1);

  arr.forEach(element => {
    result[element[0]] = element[1];
  });

  return result;
}

module.exports = convertToObject;
