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
    const [property, ...valueParts] = declaration.split(':');

    if (!property || valueParts.length === 0) {
      return;
    }

    const value = valueParts.join(':');

    const trimmedProperty = property.trim();
    const trimmedValue = value.trim();

    if (trimmedProperty === '' || trimmedValue === '') {
      return;
    }
    stylesObject[trimmedProperty] = trimmedValue;
  });

  return stylesObject;
}

module.exports = convertToObject;
