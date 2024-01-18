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
  const lines = sourceString.split('\n');

  // empty obj to store the CSS properties and values
  const stylesObject = {};

  for (const line of lines) {
    const match = line.match(/^\s*([\w-]+)\s*:\s*([^;]+)\s*;/);

    if (match) {
      const property = match[1];
      const value = match[2].trim();

      stylesObject[property] = value;
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
