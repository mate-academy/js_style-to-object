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
  const cssNormalized = {};

  sourceString
    .split(';')
    .forEach((element) => {
      const [property, value] = element.split(':');

      if (property && value) {
        const formattedProperty = property
          .replace('\n', '')
          .trim();

        cssNormalized[formattedProperty] = value.trim();
      }
    });

  return cssNormalized;
}

module.exports = convertToObject;
