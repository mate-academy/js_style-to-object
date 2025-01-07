'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  const declarations = sourceString.split(';');

  declarations.forEach((declaration) => {
    const trimmedDeclaration = declaration.trim();

    if (trimmedDeclaration === '') {
      return;
    }

    const [property, value] = trimmedDeclaration.split(':');

    if (property && value) {
      const normalizedProperty = property.trim();
      const normalizedValue = value.trim();

      stylesObject[normalizedProperty] = normalizedValue;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
