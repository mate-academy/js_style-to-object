'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObj = {};
  const declarations = sourceString.split(';');

  declarations.forEach((declaration) => {
    const trimmedDeclaration = declaration.trim();

    if (trimmedDeclaration) {
      const [property, value] = trimmedDeclaration
        .split(':')
        .map((item) => item.trim());

      if (property && value) {
        styleObj[property] = value;
      }
    }
  });

  return styleObj;
}

module.exports = convertToObject;
