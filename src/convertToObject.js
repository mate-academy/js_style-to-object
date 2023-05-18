'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const values = sourceString
    .split(';')
    .map(style =>
      style.split(':').map(elem => elem.trim()))
    .filter(value => value[0] && value[1]);

  const stylesObject = values.reduce((acc, key) => ({
    ...acc, [key[0]]: key[1],
  }), {});

  return stylesObject;
}

module.exports = convertToObject;
