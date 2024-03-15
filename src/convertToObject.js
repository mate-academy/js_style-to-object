'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleDeclarations = sourceString.split(';');
  const styleObject = {};

  for (let declaration of styleDeclarations) {
    declaration = declaration.trim();

    const [name, value] = declaration.split(':');

    if (name && value) {
      styleObject[name.trim()] = value.trim();
    }
  }

  return styleObject;
}

module.exports = convertToObject;
