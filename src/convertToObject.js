'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with
 * styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an example
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
const convertToObject = sourceString => (
  sourceString
    .split(';')
    .map(e => e.trim())
    .reduce((stylesObject, styleString) => {
      if (styleString) {
        const [property, value] = styleString
          .split(':')
          .map(e => e.trim());

        stylesObject[property] = value;
      }

      return stylesObject;
    }, {})
);

module.exports = convertToObject;
