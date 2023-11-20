'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
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
  const propertyArray = sourceString.split(';');

  propertyArray.forEach((propertyRow) => {
    const propertyRowArray = propertyRow.trim().split(':');

    if (propertyRowArray.length === 2) {
      const property = propertyRowArray[0].trim();
      const value = propertyRowArray[1].trim();

      stylesObj[property] = value;
    }
  });

  return stylesObj;
}

module.exports = convertToObject;
