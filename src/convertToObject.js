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
  const trimmedString = sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style.length > 0);

  const result = {};

  trimmedString.map((style) => {
    const propertyAndValue = style.split(':');

    return (result[propertyAndValue[0].trim()] = propertyAndValue[1].trim());
  });

  return result;
}

module.exports = convertToObject;
