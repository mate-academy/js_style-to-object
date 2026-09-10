'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};
  const declarations = sourceString.split(';');

  declarations.forEach((decl) => {
    const trimmed = decl.trim();

    if (!trimmed) {
      return;
    }

    const colonIndex = trimmed.lastIndexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const key = trimmed.slice(0, colonIndex).trim();
    const value = trimmed.slice(colonIndex + 1).trim();

    if (key) {
      styleObject[key] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
