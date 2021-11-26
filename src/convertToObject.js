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
  // write your code here

  const sourceStringToArray = sourceString.split(';');

  const objectOfProperties = {};

  sourceStringToArray.forEach(property => {
    const propertyBreak = property.split(':');

    if (propertyBreak[1]) {
      objectOfProperties[propertyBreak[0].trim()] = (propertyBreak[1].trim());
    }
  });

  return objectOfProperties;

}

module.exports = convertToObject;
