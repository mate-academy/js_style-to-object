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
  // write your code here
  const properties = sourceString
    .split(';')
    .map(property => property.split(':').map(x => x.trim()));

  const result = {};

  for (const property of properties) {
    if (property.length === 2) {
      const [key, value] = property;

      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
