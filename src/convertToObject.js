'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString.split(';');

  const properties = declarations
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration)
    .reduce((prevDeclaration, curDeclaration) => {
      const [property, value] = curDeclaration.split(':');

      if (value) {
        prevDeclaration[property.trim()] = value.trim();
      }

      return prevDeclaration;
    }, {});

  return properties;
}

module.exports = convertToObject;
