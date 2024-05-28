'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString) {
    return {};
  }

  const styleToObject = {};
  const styleDeclarations = sourceString.split(';');

  styleDeclarations.forEach((declaration) => {
    const index = declaration.indexOf(':');

    const name = declaration.substring(0, index).trim();
    const value = declaration.substring(index + 1).trim();

    if (name && value) {
      styleToObject[name] = value;
    }
  });

  return styleToObject;
}

module.exports = convertToObject;
