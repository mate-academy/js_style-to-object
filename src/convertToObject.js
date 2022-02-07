'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const propertiesArray = sourceString.split(';').map(property =>
    property.trim()).map(property =>
    property.split(':')).map((property) =>
    property.map(element => element.trim()));

  const resultObj = {};

  propertiesArray.forEach(property => {
    if (property[0] !== ';' && property[0] !== '') {
      resultObj[property[0]] = property[1];
    }
  });

  return resultObj;
}

module.exports = convertToObject;
