'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  const allProperties = sourceString.split(';');

  const trimmedProperties = allProperties.map(element => element.trim());

  const propertiesWithoutSpaces = trimmedProperties.filter(
    element => element.length
  );

  const property = propertiesWithoutSpaces.map(element => element.split(':'));

  const trimmedValues = property.map(element => element[1].trim());

  const trimmedKeys = property.map(element => element[0].trim());

  for (let i = 0; i < trimmedValues.length; i++) {
    styles[trimmedKeys[i]] = trimmedValues[i];
  }

  return styles;
}

module.exports = convertToObject;
