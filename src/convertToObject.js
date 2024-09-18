'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const cleanSource = sourceString.trim();

  const declarations = cleanSource.split(';');

  const styleObject = {};

  declarations.forEach((declaration) => {
    if (declaration.trim()) {
      const [property, value] = declaration.split(':');

      if (property && value) {
        styleObject[property.trim()] = value.trim();
      }
    }
  });

  return styleObject;
}

module.exports = convertToObject;
