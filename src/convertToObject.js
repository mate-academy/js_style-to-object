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
  const arraySourceString = sourceString.split(';');
  const objectStyles = {};

  arraySourceString.forEach((string) => {
    const [property, value] = string.split(':').map((part) => part.trim());

    if (property && value) {
      objectStyles[property] = value;
    }
  });

  return objectStyles;
}

module.exports = convertToObject;
