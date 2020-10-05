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

  for (const property of splitedString) {
    const splitedProperty = property.split(':');

    if (splitedProperty[0] && splitedProperty[1]) {
      const propertyName = splitedProperty[0].trim();
      const propertyValue = splitedProperty[1].trim();

      convertedString[propertyName] = propertyValue;
    }
  }

  return convertedString;
}

module.exports = convertToObject;
