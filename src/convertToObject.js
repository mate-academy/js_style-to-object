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
  return sourceString
    .split(';')
    .reduce((accumulator, property) => {
      const [key, value] = property.split(':');

      if (key.length > 0 && value) {
        accumulator[key.trim()] = value.trim();
      }

      return accumulator;
    }, {});
}

module.exports = convertToObject;
