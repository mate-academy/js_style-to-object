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
  const cssObject = {};
  const lines = sourceString.split(';');

  const nonEmptyLines = lines.filter(line => line.trim() !== '');

  nonEmptyLines.forEach(line => {
    const [property, value] = line.split(':').map(part => part.trim());

    cssObject[property] = value;
  });

  return cssObject;
}

module.exports = convertToObject;
