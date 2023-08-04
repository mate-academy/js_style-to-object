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
  // write your code here
  const styleObject = {};

  sourceString.split(';')
    .map(entry => entry.trim())
    .filter(Boolean)
    .forEach(entry => {
      const [property, value] = entry.split(':').map(part => part.trim());

      styleObject[property] = value;
    });

  return styleObject;
}

module.exports = convertToObject;
