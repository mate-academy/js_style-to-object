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

  sourceString
    .split(';')
    .filter(string => string.length > 0)
    .map(string => {
      const fullString = string
        .split(':')
        .map(property => property.trim());
      const key = fullString[0];
      const value = fullString[1];

      if (value !== undefined) {
        result[key] = value;
      }
    });

  return result;
}

module.exports = convertToObject;
