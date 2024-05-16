'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
const convertToObject = (stylesString) => {
  const styles = {};

  const declarations = stylesString.split(';');

  declarations.forEach((declaration) => {
    const trimmedDeclaration = declaration.trim();

    if (trimmedDeclaration) {
      const [property, value] = trimmedDeclaration.split(':');

      const trimmedProperty = property.trim();
      const trimmedValue = value.trim();

      styles[trimmedProperty] = trimmedValue;
    }
  });

  return styles;
};

module.exports = convertToObject;
