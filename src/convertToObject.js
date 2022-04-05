'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const property = sourceString.split(';').map(current => current
    .split(':')).filter(current => current.length > 1);

  property.map(current => (result[current[0].trim()] = current[1].trim()));

  return result;
}

module.exports = convertToObject;
