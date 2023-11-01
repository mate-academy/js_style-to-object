'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObject = {};
  const stylePairs = sourceString.split(';');

  stylePairs.forEach(pair => {
    const keyValue = pair.split(':');

    if (keyValue.length === 2) {
      const property = keyValue[0].trim();
      const value = keyValue[1].trim();

      cssObject[property] = value;
    }
  });

  return cssObject;
}

module.exports = convertToObject;
