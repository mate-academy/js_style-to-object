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
  const properties = sourceString
    .replace(/\n/g, '')
    .split(';');
  const result = {};

  properties.forEach((element) => {
    if (element.includes(':')) {
      const [property, value] = element.split(':');

      result[property.trim()] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
