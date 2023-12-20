'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.split('\n');
  const objectWithProperties = {};

  lines.forEach(line => {
    const properties = line.split(';');

    properties.forEach(property => {
      const part = property.split(':');
      const key = part[0].trim();
      const value = part[1] ? part[1].trim() : '';

      if (key !== '') {
        objectWithProperties[key] = value;
      }
    });
  });

  return objectWithProperties;
}

module.exports = convertToObject;
