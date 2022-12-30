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
  const propertiesArr = sourceString.split(';');
  const styleObject = {};

  for (const property of propertiesArr) {
    if (property.trim().length === 0) {
      continue;
    }

    const propertyKey = property.split(':')[0].trim();
    const propertyValue = property.split(':')[1].trim();

    styleObject[propertyKey] = propertyValue;
  }

  return styleObject;
}

module.exports = convertToObject;
