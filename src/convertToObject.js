'use strict';

/**
 * @param {string} sourceString
 *
 * @returns {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString.split(';');

  return declarations.reduce((styles, declaration) => {
    const trimmed = declaration.trim();

    if (!trimmed) {
      return styles;
    }

    const colonIndex = trimmed.indexOf(':');

    if (colonIndex === -1) {
      return styles;
    }

    const property = trimmed.slice(0, colonIndex).trim();
    const value = trimmed.slice(colonIndex + 1).trim();

    return {
      ...styles,
      [property]: value,
    };
  }, {});
}

module.exports = convertToObject;
