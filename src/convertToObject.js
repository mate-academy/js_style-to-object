'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const declarations = sourceString.split(';');

  declarations.forEach((declaration) => {
    const cleanDeclaration = declaration.trim();

    if (!cleanDeclaration) {
      return;
    }

    const [property, value] = cleanDeclaration
      .split(':')
      .map((part) => part.trim());

    if (property && value) {
      result[property] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
