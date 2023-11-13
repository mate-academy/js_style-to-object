'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objectWithCssProperties = {};
  const propertiesArray = sourceString.split(';');

  for (const properties of propertiesArray) {
    const propertie = properties.split(':');

    if (propertie.length === 2) {
      const key = propertie[0].trim();
      const value = propertie[1].trim();

      objectWithCssProperties[key] = value;
    }
  }

  return objectWithCssProperties;
}

module.exports = convertToObject;
