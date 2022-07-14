'use strict';

/*
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
  const lines = sourceString.split(';');
  const styleObject = {};

  lines.forEach(line => {
    const lineElements = line.split(':');

    if (lineElements.length === 2) {
      styleObject[lineElements[0].trim()] = lineElements[1].trim();
    }
  });

  return styleObject;
}

module.exports = convertToObject;
