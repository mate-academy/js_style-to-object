'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
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
