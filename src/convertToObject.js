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
  const splitedString = sourceString.split(';');
  const cssObject = {};

  for (const line of splitedString) {
    const colonIndex = line.indexOf(':');

    if (colonIndex !== -1) {
      const property = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).replace(';', ' ').trim();

      cssObject[property] = value;
    }
  }

  return cssObject;
}

module.exports = convertToObject;
