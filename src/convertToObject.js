'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const trimmedString = sourceString.replace(/^\s+/gm, '');

  const propertyValuePairs = trimmedString.split(';');

  const result = {};

  propertyValuePairs.forEach((pair) => {
    const [key, value] = pair.split(':');

    const trimmedKey = key.trim();
    const trimmedValue = value ? value.trim() : '';

    if (trimmedKey && trimmedValue) {
      result[trimmedKey] = trimmedValue;
    }
  });

  return result;
}

module.exports = convertToObject;
