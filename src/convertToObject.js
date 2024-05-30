'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};
  const declarations = sourceString.split(';');

  declarations.forEach((declaration) => {
    const newDeclaration = declaration.trim();

    if (!declaration) {
      return;
    }

    const [property, value] = newDeclaration
      .split(':')
      .map((part) => part.trim());

    if (property && value) {
      styleObject[property] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
