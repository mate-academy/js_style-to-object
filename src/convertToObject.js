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
  const properties = sourceString.split(';');
  const result = {};

  for (const property of properties) {
    const [prop, value] = property.split(':');
    if (prop && value) {
      const propName = prop.trim();
      const propValue = value.trim();
      result[propName] = propValue;
    }
  }

  return result;
}

module.exports = convertToObject;
