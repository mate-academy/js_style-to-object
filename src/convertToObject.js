'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  const styleDeclarations = stylesString.split(';');
  const stylesObject = {};

  styleDeclarations.forEach(declaration => {
    const [property, value] = declaration.split(':');

    if (property && value) {
      const propertyName = property.trim();
      const propertyValue = value.trim();

      stylesObject[propertyName] = propertyValue;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
