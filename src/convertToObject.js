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
    if (declaration.trim() !== '') {
      const [key, value] = declaration.split(':');

      styleObject[key.trim()] = value.trim();
    }
  });

  return styleObject;
}

module.exports = convertToObject;
