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
  const stylesObject = {};

  const lines = sourceString.split(';').map(line => line.trim());

  lines.forEach(line => {
    if (line) {
      const [property, value] = line.split(':').map(str => str.trim());

      stylesObject[property] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
