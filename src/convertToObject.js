'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const WHITE_SPACE_REGEX = /\s+/g;
  const cssObject = {};

  const trimmedLines = sourceString.split(';')
    .map((line) =>
      line.replace(WHITE_SPACE_REGEX, ' ')
        .trim())
    .filter((line) => line.trim() !== '');

  trimmedLines.forEach((pair) => {
    const [property, value] = pair.split(':').map((item) => item.trim());

    if (property && value) {
      cssObject[property] = value;
    }
  });

  return cssObject;
}

module.exports = convertToObject;
