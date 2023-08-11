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
  const styleObject = {};

  const styleArray = sourceString.trim().split(';');

  for (const style of styleArray) {
    const [key, value] = style.trim().split(':');
    const cleanedKey = key.trim();

    if (cleanedKey) {
      styleObject[cleanedKey] = value.trim();
    }
  }

  return styleObject;
}

module.exports = convertToObject;
