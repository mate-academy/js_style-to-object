'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  const declarations = sourceString
    .split(';')
    .map((declaration) => declaration.trim());

  declarations.forEach((declaration) => {
    const [key, value] = declaration.split(':').map((part) => part.trim());

    styleObject[key] = value;
  });

  return styleObject;
}

module.exports = convertToObject;
