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
  const cssValues = sourceString.split('\n');
  const propertiesObject = {};

  cssValues.forEach(values => {
    const cssProperties = values.split(';');

    cssProperties.forEach(property => {
      const part = property.split(':');
      const key = part[0].trim();
      const value = part[1] ? part[1].trim() : '';

      if (key !== '') {
        propertiesObject[key] = value;
      }
    });
  });

  return propertiesObject;
}

module.exports = convertToObject;
