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
  const stylePairs = sourceString.split(';');

  const cssObject = {};

  for (const pair of stylePairs) {
    const [property, value] = pair.split(':', 2).map(part => part.trim());

    if (property && value) {
      cssObject[property] = value;
    }
  }

  return cssObject;
}

module.exports = convertToObject;
