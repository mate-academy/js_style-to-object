'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.trim() === '') {
    return {};
  }

  const styleDeclarations = sourceString.split(';');
  const cssStyles = {};

  styleDeclarations.forEach((declaration) => {
    const parts = declaration.split(':');

    if (parts.length >= 2) {
      const key = parts[0].trim();
      const value = parts.slice(1).join(':').trim();

      if (key && value) {
        cssStyles[key] = value;
      }
    }
  });

  return cssStyles;
}

module.exports = convertToObject;
