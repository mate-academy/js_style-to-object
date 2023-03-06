/* eslint-disable max-len */
'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split('\n').reduce((styles, line) => {
    const trimmedLine = line.trim();

    const properties = trimmedLine.split(';');

    properties.forEach(property => {
      const [key, value] = property.split(':').map(str => str.trim());

      if (key && value) {
        styles[key] = value;
      }
    });

    return styles;
  }, {});
}

module.exports = convertToObject;
