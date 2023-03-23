'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object
 * where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const arrayOfProperties = sourceString
    .split(';')
    .map(prop => prop.split(':').map(item => item.trim()))
    .filter(prop => prop.length > 1);

  const entries = new Map(arrayOfProperties);

  return Object.fromEntries(entries);
}

module.exports = convertToObject;
