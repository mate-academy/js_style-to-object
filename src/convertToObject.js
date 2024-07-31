'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

const convertToObject = (stylesString) => {
  const styleObject = {};

  const declarations = stylesString.split(';');

  declarations.forEach((declaration) => {
    const trimmedDeclaration = declaration.trim();

    if (trimmedDeclaration) {
      const [property, value] = trimmedDeclaration.split(':');

      if (property && value) {
        styleObject[property.trim()] = value.trim();
      }
    }
  });

  return styleObject;
};

module.exports = convertToObject;
