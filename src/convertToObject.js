'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString
    .split(';')
    .filter((declaration) => declaration.trim() !== '');

  const styleObject = {};

  declarations.forEach((declaration) => {
    const [property, value] = declaration.split(':').map((part) => part.trim());

    styleObject[property] = value;
  });

  return styleObject;
}

module.exports = convertToObject;
