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
    if (declaration.trim()) {
      const [property, value] = declaration.split(':');

      styleObject[property.trim()] = value.trim();
    }
  });

  return styleObject;
}

module.exports = convertToObject;
