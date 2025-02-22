'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const style = {};
  const declarations = sourceString.split(';');

  declarations.forEach((declaration) => {
    const trimerDeclaration = declaration.trim();

    if (trimerDeclaration) {
      const parts = trimerDeclaration.split(':');

      if (parts.length === 2) {
        const property = parts[0].trim();
        const value = parts[1].trim();

        style[property] = value;
      }
    }
  });

  return style;
}

module.exports = convertToObject;
