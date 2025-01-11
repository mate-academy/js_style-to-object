'use strict';

/**
 * @param {string} _sourceString
 *
 * @return {object}
 */
function convertToObject(_sourceString) {
  const stylesObject = {};

  const declarations = _sourceString.split(';');

  declarations.forEach((declaration) => {
    if (declaration.trim()) {
      const [property, value] = declaration.split(':');

      if (property && value) {
        stylesObject[property.trim()] = value.trim();
      }
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
