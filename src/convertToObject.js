'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (
 * see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (
 * see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleDeclarations = sourceString.split(';');
  const cssObject = {};

  for (const declaration of styleDeclarations) {
    const [property, value] = declaration.trim().split(':');
    const trimmedProperty = property.trim();
    const trimmedValue = value ? value.trim() : '';

    if (trimmedProperty && trimmedValue) {
      cssObject[trimmedProperty] = trimmedValue;
    }
  }

  return cssObject;
}

module.exports = convertToObject;
