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
  const properties = sourceString.split(';').map(property =>
    property.split(':')).flat().map(keyAndValue => keyAndValue.trim())
    .filter(keysAndValues => keysAndValues !== '');
  const objectWithProperties = {};

  for (let i = 0; i < properties.length; i += 2) {
    objectWithProperties[properties[i]] = properties[i + 1];
  }

  return objectWithProperties;
}

module.exports = convertToObject;
