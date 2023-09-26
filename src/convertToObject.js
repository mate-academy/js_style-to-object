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
  const cssProperties = {};
  const propertyValuePairs = sourceString.split(';');

  for (const pair of propertyValuePairs) {
    const [property, value] = pair.split(':').map((str) => str.trim());

    if (property && value) {
      cssProperties[property] = value;
    }
  }

  return cssProperties;
}

module.exports = convertToObject;
