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
  const cssObj = {};

  sourceString.split(';').forEach((line) => {
    const lineArr = line.trim().split(':');

    if (lineArr[0] === '' || lineArr[1] === undefined) {
      return;
    }

    cssObj[lineArr[0].trim()] = lineArr[1].trim();
  });

  return cssObj;
}

module.exports = convertToObject;
