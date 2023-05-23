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
  const stylesObject = {};

  new Set(sourceString.split(';')).forEach((param) => {
    let paramNormalized = param.split(':');

    if (paramNormalized.length === 2) {
      paramNormalized = paramNormalized.map(element => element.trim());
      stylesObject[paramNormalized[0]] = paramNormalized[1];
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
