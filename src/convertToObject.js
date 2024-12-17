'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(stylesString) {
  const styleObject = {};

  const declarations = stylesString
    .split(';')
    .filter((declaration) => declaration.trim());

  declarations.forEach((declaration) => {
    const [property, value] = declaration.split(':');

    if (property && value) {
      const cleanProperty = property.trim();
      const cleanValue = value.trim();

      styleObject[cleanProperty] = cleanValue;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
