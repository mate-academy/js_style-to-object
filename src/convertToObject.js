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
      const splittedString = property.split(':');
      const propertyName = splittedString[0];
      const propertyValue = splittedString[1];

      if (propertyName.length > 0 && propertyValue) {
        accumulator[propertyName.trim()] = propertyValue.trim();
      }

      return accumulator;
    }, {});
}

module.exports = convertToObject;
