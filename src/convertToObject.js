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

  const arrSourceString = sourceString.split(';')
    .map(source => source.split(':').map(arr => arr.trim()));

  arrSourceString.forEach(element => {
    if (element[0]) {
      result[element[0]] = element[1];
    }
  });

  return result;
}

module.exports = convertToObject;
