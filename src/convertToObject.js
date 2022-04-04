'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesS
 * and returns an object where CSS properties are keys
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};
  const lines = sourceString.split('\n').filter(line => line.includes(':'));
  const properties = lines.map(line => line.split(':'));

  for (const property of properties) {
    result[property[0].trim()] = property[1].trim().slice(0, -1).trim();
  }

  return result;
}

module.exports = convertToObject;
