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
  var outputObject = {};
  var propertiesKeys = sourceString.split(';').slice(0, -1);

  for (let property of propertiesKeys) {
    var propertyKey = property.split(':');
    outputObject[propertyKey[0].trim()] = propertyKey[1].trim();
  }
  return outputObject;
}

module.exports = convertToObject;
