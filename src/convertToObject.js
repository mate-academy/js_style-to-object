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
  const objOfProperties = {};

  const properties = sourceString.split(';');

  properties.forEach(function(property) {
    const propValuePair = property.split(':');

    if (propValuePair.length === 2) {
      objOfProperties[propValuePair[0].trim()] = propValuePair[1].trim();
      propValuePair.length = 0;
    }
  });

  return objOfProperties;
}

module.exports = convertToObject;
