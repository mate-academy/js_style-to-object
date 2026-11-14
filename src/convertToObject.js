'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const parsedStyles = {};

  sourceString.split(';').forEach((declaration) => {
    const colonIndex = declaration.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const property = declaration.slice(0, colonIndex).trim();
    const value = declaration.slice(colonIndex + 1).trim();

    if (property && value) {
      parsedStyles[property] = value;
    }
  });

  return parsedStyles;
}

module.exports = convertToObject;
