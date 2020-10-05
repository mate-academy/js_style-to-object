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
  const splitedString = sourceString.split(';');
  const convertedObject = {};

  for (const property of splitedString) {
    const splitedProperty = property.split(':');

    if (splitedProperty[0] && splitedProperty[1]) {
      const key = splitedProperty[0].trim();
      const value = splitedProperty[1].trim();

      convertedObject[key] = value;
    }
  }

  return convertedObject;
}

module.exports = convertToObject;
