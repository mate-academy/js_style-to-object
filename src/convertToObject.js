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

    if (propertyRowArray[1]) {
      const [property, value] = propertyRowArray;

      stylesObj[property.trim()] = value.trim();
    }
  });

  return stylesObj;
}

module.exports = convertToObject;
