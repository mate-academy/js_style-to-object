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
  const trimedArr = sourceString.trim().split(';')
    .map(propertie => propertie.trim().split(':').map(prop => prop.trim()));

  const arrOfProperties = trimedArr.filter(propertie => propertie.length > 1);

  const objectOfProperties = arrOfProperties.reduce((obj, propertie) => (
    {
      ...obj,
      [propertie[0]]: propertie[1],
    }
  ), {});

  return objectOfProperties;
}

module.exports = convertToObject;
