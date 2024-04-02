'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(stylesString) {
  const styleObject = {};
  const declarations = stylesString.split(';').filter(Boolean);

  declarations.forEach((declaration) => {
    const [property, value] = declaration.split(':').map((part) => part.trim());

    styleObject[property] = value;
  });

  return styleObject;
}

module.exports = convertToObject;
