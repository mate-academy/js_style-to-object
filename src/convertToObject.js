'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stringToObject = {};

  sourceString
    .split(';')
    .forEach(rule => {
      const toArray = rule
        .split(':')
        .map(word => word.trim());
      const [key, value] = toArray;

      if (key && value) {
        stringToObject[key] = value;
      }
    });

  return stringToObject;
}

module.exports = convertToObject;
