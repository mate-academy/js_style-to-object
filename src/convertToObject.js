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
  return sourceString.trim().split(';')
    .map(propertie => propertie.trim().split(':').map(prop => prop.trim()))
    .filter(propertie => propertie.length > 1)
    .reduce((obj, propertie) => (
      {
        ...obj,
        [propertie[0]]: propertie[1],
      }
    ), {});
}

module.exports = convertToObject;
