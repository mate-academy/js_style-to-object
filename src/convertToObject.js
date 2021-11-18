/* eslint-disable no-console */
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
