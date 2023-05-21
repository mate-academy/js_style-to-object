'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  sourceString
    .split(';')
    .map(string => string.trim())
    .filter(symbol => symbol !== '')
    .forEach(property => {
      const properties = property.split(':');
      const key = properties[0];
      const value = properties[1];

      stylesObject[key.trim()] = value.trim();
    });

  return stylesObject;
}

module.exports = convertToObject;
