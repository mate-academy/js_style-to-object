'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styleString) {
  const result = {};
  const declarations = styleString.split(';');

  declarations.forEach((declaration) => {
    const trimmed = declaration.trim();

    if (trimmed === '') {
      return;
    }

    const colonIndex = trimmed.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const property = trimmed.slice(0, colonIndex).trim();
    const value = trimmed.slice(colonIndex + 1).trim();

    result[property] = value;
  });

  return result;
}

module.exports = convertToObject;
