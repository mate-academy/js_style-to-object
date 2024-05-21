'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceObject = {};
  const declarations = sourceString.split(';');

  declarations.forEach((declaration) => {
    const [property, value] = declaration.split(':');

    if (property && value) {
      const trimmedProperty = property.trim();
      const trimmedValue = value.trim();

      sourceObject[trimmedProperty] = trimmedValue;
    }
  });

  return sourceObject;
}
module.exports = convertToObject;
