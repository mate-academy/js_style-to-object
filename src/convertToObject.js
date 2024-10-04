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

    if (!trimmedDeclaration) {
      return;
    }

    const [property, value] = trimmedDeclaration
      .split(':')
      .map((part) => part.trim());

    stylesObject[property] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
