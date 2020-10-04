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
  const splitedString = sourceString.trim().split(';');
  const convertedString = {};

  for (let property of splitedString) {
    property = property.split(':');

    if (property[0] && property[1]) {
      const propertyName = property[0].trim();
      const propertyValue = property[1].trim();

      convertedString[propertyName] = propertyValue;
    }
  }

  return convertedString;
}

module.exports = convertToObject;
