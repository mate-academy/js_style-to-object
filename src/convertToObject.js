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
  const keysAndValues = sourceString.split(';').map(str => str.split(':'));
  const result = {};

  for (let pair of keysAndValues) {
    if (pair.length === 2) {
      pair = pair.map(element => element.replace(/\s+/g, ' ').trim());

      result[pair[0]] = pair[1];
    }
  }

  return result;
}

module.exports = convertToObject;
