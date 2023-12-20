'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleDeclarations = sourceString.split(';');
  const stylesObject = {};

  styleDeclarations.forEach(declaration => {
    if (declaration.trim() !== '') {
      const [property, value] = declaration.split(':');
      const trimmedProperty = property.trim();
      const trimmedValue = value.trim();

      if (trimmedProperty && trimmedValue) {
        stylesObject[trimmedProperty] = trimmedValue;
      }
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
