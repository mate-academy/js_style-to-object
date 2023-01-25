'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const values = sourceString.split(';');
  const resultObject = {};

  values.forEach(value => {
    const property = value.trim().split(':').map(element => element.trim());

    if (!property.includes('')) {
      resultObject[property[0]] = property[1];
    }
  });

  return resultObject;
}

module.exports = convertToObject;
