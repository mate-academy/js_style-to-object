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
  const arrOfProperties = sourceString.split(';');
  const object = {};

  for (const propertyAndValue of arrOfProperties) {
    const index = propertyAndValue.indexOf(':');
    const property = propertyAndValue.slice(0, index).trim();
    const value = propertyAndValue.slice(index + 1).trim();

    if (property) {
      object[property] = value;
    }
  }

  return object;
}

module.exports = convertToObject;
