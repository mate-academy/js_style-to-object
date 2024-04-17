'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cleanedString = sourceString
    .replace(/\s*:\s*/g, ':')
    .replace(/\s*;\s*/g, ';')
    .trim();

  const declarations = cleanedString.split(';').filter(Boolean);

  const stylesObject = {};

  declarations.forEach((declaration) => {
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
