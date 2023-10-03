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
  const stylesObj = {};

  const arraySource = sourceString.split(';');

  for (const key of arraySource) {
    const [property, value] = key.split(':')
      .map(str => str.trim());

    if (property && value) {
      stylesObj[property] = value;
    }
  }

  return stylesObj;
}

module.exports = convertToObject;
