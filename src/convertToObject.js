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
  const result = {};
  const formattedArray
    = sourceString.split(';')
      .map(line => line.trim())
      .filter(line => line.length > 1);

  for (const line of formattedArray) {
    const [key, value] = line.split(':');

    result[key.trim()] = value.trim();
  }

  return result;
}

module.exports = convertToObject;
