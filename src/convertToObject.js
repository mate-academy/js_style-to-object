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
  return sourceString
    .split(';')
    .reduce((accumulator, property) => {
      const items = property.split(':');

      if (items[1]) {
        accumulator[items[0].trim()] = items[1].trim();
      }

      return accumulator;
    }, {});
}

module.exports = convertToObject;
