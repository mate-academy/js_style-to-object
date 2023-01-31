'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitted = sourceString.split(';');
  const result = {};

  for (const item of splitted) {
    const property = item
      .trim()
      .split(':')
      .map(element => element.trim());

    if (!property.includes('')) {
      result[property[0]] = property[1];
    }
  }

  return result;
}

module.exports = convertToObject;
