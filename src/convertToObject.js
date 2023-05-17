/* eslint-disable no-console */
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
  const cssObject = {};
  const propertiesArray = sourceString.split(';');

  propertiesArray.map(property => {
    const arrayProperties = property.split(':').map(element => element.trim());

    if (arrayProperties.length >= 2) {
      cssObject[arrayProperties[0]] = arrayProperties[1];
    }
  });

  return cssObject;
}

module.exports = convertToObject;
