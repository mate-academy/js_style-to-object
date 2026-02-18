'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((styleDeclaration) => styleDeclaration.trim())
    .filter((styleDeclaration) => styleDeclaration.length)
    .map((styleDeclaration) => {
      const colonPosition = styleDeclaration.indexOf(':');

      if (colonPosition === -1) {
        return null;
      }

      const propertyName = styleDeclaration.slice(0, colonPosition).trim();

      const propertyValue = styleDeclaration.slice(colonPosition + 1).trim();

      return {
        propertyName,
        propertyValue,
      };
    })
    .filter((style) => style !== null)
    .reduce((stylesObject, style) => {
      stylesObject[style.propertyName] = style.propertyValue;

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
