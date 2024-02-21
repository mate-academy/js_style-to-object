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
  // write your code here
  const result = {};
  const properties = sourceString.split(';');

  for (const propertyString of properties) {
    const property = propertyString.split(':').map(a => a.trim());

    if (property.length === 2 && property.every(a => a.length > 0)) {
      result[property[0]] = property[1];
    }
  }

  return result;
}

module.exports = convertToObject;
