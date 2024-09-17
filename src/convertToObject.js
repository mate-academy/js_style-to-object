'use strict';

/**
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
