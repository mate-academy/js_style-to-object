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
  let properties = sourceString.split(';');

  properties = properties
    .slice(0, properties.length - 1)
    .map(property => property.trim())
    .filter(property => property.length !== 0)
    .map(property => property.split(':'));

  const propertyObject = {};

  properties.forEach(property => {
    propertyObject[property[0].trim()] = property[1].trim();
  });

  return propertyObject;
}

module.exports = convertToObject;
