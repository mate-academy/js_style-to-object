'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const parsedStyles = {};

  const declarations = sourceString.split(';');

  declarations.forEach((declaration) => {
    const trimmedDecl = declaration.trim();

    if (trimmedDecl === '') {
      return;
    }

    const colonIndex = trimmedDecl.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const property = trimmedDecl.slice(0, colonIndex).trim();
    const value = trimmedDecl.slice(colonIndex + 1).trim();

    if (property === '' || value === '') {
      return;
    }

    parsedStyles[property] = value;
  });

  return parsedStyles;
}

module.exports = convertToObject;
