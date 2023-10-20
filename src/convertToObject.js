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
  const PROPERTY_MUST_HAVE_LENGTH = 2;
  const result = {};
  const cssArr = sourceString
    .split(';')
    .map(property => property.trim())
    .map(property => property.split(/\s*:\s*/));

  for (const property of cssArr) {
    if (property.length === PROPERTY_MUST_HAVE_LENGTH) {
      const [key, value] = property;

      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
