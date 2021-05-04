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

  const source = sourceString
    .split(':')
    .join(';')
    .split(';')
    .map(str => str.trim());

  for (let i = 0; i < source.length; i += 2) {
    if (source[i]) {
      result[source[i]] = source[i + 1];
    }
  }

  return result;
}

module.exports = convertToObject;
