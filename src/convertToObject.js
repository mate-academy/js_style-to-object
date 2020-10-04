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

  for (let property of splitedString) {
    property = property.split(':');

    if (property[0] && property[1]) {
      const key = property[0].trim();
      const value = property[1].trim();

      convertedObject[key] = value;
    }
  }

  return convertedObject;
}

module.exports = convertToObject;
