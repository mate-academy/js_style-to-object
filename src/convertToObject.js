'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObj = {};

  const stylesArr = sourceString.split(';');

  const propertyValueArr = [];

  stylesArr.forEach(string => {
    if (string.trim().length !== 0) {
      propertyValueArr.push(string.split(':'));
    }
  });

  propertyValueArr.forEach(element => {
    const [property, value] = element;

    stylesObj[property.trim()] = value.trim();
  });

  return stylesObj;
}

module.exports = convertToObject;
