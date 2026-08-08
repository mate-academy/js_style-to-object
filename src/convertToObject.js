'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  const declarations = sourceString.split(';');

  declarations.forEach((declaration) => {
    const colorIndex = declaration.indexOf(':');

    if (colorIndex !== -1) {
      const key = declaration.slice(0, colorIndex).trim();
      const value = declaration.slice(colorIndex + 1).trim();

      if (key) {
        styles[key] = value;
      }
    }
  });

  return styles;
}

module.exports = convertToObject;
