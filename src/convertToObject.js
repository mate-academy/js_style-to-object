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

  sourceString
    .replace(/\n/g, '')
    .split(';')
    .filter(row => row.split(':').length === 2)
    .forEach(row => {
      const pair = row.split(':');

      styleObject[pair[0].trim()] = pair[1].trim();
    });

  return styleObject;
}

module.exports = convertToObject;
