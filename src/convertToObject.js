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
  const objectFromCss = {};

  const cssLines = sourceString.split(';').map(line => {
    const lineArray = line.split(':');
    const lineKey = lineArray[0];
    const lineValue = lineArray[1];

    if (lineKey && lineValue) {
      return { [lineKey.trim()]: lineValue.trim() };
    }
  });

  return Object.assign(objectFromCss, ...cssLines);
}

module.exports = convertToObject;
