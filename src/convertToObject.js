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
  const cssProperties = sourceString.trim().split(';');
  const propertiesObj = {};

  for (const property of cssProperties) {
    const splitProperty = property.trim().split(':');
    if (splitProperty[0]) {
      propertiesObj[splitProperty[0].trim()] = splitProperty[1].trim();
    }
  }

  return propertiesObj;
}

module.exports = convertToObject;
