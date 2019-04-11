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
  const propertyObj = {};
  const propertiesArray = sourceString.split(';');

  for (let property of propertiesArray) {
    property = property.trim().split(': ');
    propertyObj[property[0]] = property[1];
  }
  return propertyObj;
}

module.exports = convertToObject;
