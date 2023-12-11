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
  const styleObject = {};
  const pairs = sourceString.split(';')
    .filter((pair) =>
      pair.trim().length > 0);

  pairs.forEach((pair) => {
    const [property, value] = pair.split(':')
      .map((str) => str.trim());

    if (property && value) {
      styleObject[property] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
