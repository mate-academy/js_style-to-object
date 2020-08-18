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
    .filter(str => str.length > 0)
    .map(str => {
      const fullStr = str
        .split(':')
        .map(prop => prop.trim());
      const key = fullStr[0];
      const value = fullStr[1];

      if (value !== undefined) {
        result[key] = value;
      }
    });

  return result;
}

module.exports = convertToObject;
