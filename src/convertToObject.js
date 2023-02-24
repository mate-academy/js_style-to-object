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
    .split(';')
    .map(prop => prop.trim())
    .filter(prop => prop.length > 0);

  return Object.fromEntries(properties.map(el => {
    return el
      .split(':')
      .map(prop => prop.trim());
  }));
}

module.exports = convertToObject;
