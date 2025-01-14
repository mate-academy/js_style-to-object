'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  const declarations = sourceString.split(';');

  for (let declaration of declarations) {
    declaration = declaration.trim();

    if (!declaration) {
      continue;
    }

    const [property, value] = declaration.split(':');

    if (property && value) {
      styleObject[property.trim()] = value.trimStart();
    }
  }

  return styleObject;
}

module.exports = convertToObject;
