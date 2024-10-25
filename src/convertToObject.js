'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styleString) {
  const stylesObject = {};
  const cleanedStyleString = styleString.trim();
  const declarations = cleanedStyleString.split(';');

  declarations.forEach((declaration) => {
    if (declaration.includes(':')) {
      const [property, value] = declaration.split(':');

      if (property && value) {
        const trimmedProperty = property.trim();
        const trimmedValue = value.trim();

        if (trimmedProperty && trimmedValue) {
          stylesObject[trimmedProperty] = trimmedValue;
        }
      }
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
