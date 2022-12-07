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
  return sourceString
    .split('\n')
    .map(properties =>
      properties
        .split(':')
        .map(str => (str
          .split(';')
          .join('')
          .trim()
        )))
    .filter(item => item.length !== 1)
    .reduce((newObject, [property, value]) => ({
      ...newObject,
      [property]: value,
    }), {});
};

module.exports = convertToObject;
