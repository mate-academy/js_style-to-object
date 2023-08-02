'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an
 * exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((el) => el.split(':').map((part) => part.trim()))
    .filter(([property, value]) => property && value)
    .reduce((stylesObject, [property, value]) => (
      {
        ...stylesObject, [property]: value,
      }
    ), {});
}

module.exports = convertToObject;
