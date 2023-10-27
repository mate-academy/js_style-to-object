'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleDeclarations = sourceString.split(';');

  const styleObject = {};

  for (const declaration of styleDeclarations) {
    const [property, value] = declaration.split(':');

    const trimmedProperty = property.trim();
    const trimmedValue = value ? value.trim() : undefined;

    if (trimmedProperty !== undefined && trimmedProperty !== '') {
      styleObject[trimmedProperty] = trimmedValue;
    }
  }

  return styleObject;
}

module.exports = convertToObject;
