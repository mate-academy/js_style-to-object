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
  const properties = sourceString.split(';');
  const propertyList = {};

  for (const property of properties) {
    if (property.includes(':')) {
      const element = property.split(':');

      propertyList[element[0].trim()] = element[1].trim();
    }
  }

  return propertyList;
}
module.exports = convertToObject;
