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
  const propertiesObject = {};

  sourceString
    .split(';')
    .map(line => line.split(':').map(element => element.trim()))
    .forEach(propertyPair => {
      if (propertyPair[0]) {
        propertiesObject[propertyPair[0]] = propertyPair[1];
      }
    });

  return propertiesObject;
}

module.exports = convertToObject;
