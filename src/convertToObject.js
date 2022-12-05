'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const string = sourceString.trim().replace(/\s*(:|;)\s*/g, '$1 ');
  const properties = string.split('; ');
  const normalizedProperties = {};

  properties.forEach(property => {
    if (property) {
      const [propertyName, value] = property.split(': ');

      normalizedProperties[propertyName] = value;
    }
  });

  return normalizedProperties;
}

module.exports = convertToObject;
