'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration.length > 0)
    .forEach((declaration) => {
      const colonIndex = declaration.indexOf(':');

      if (colonIndex === -1) {
        return;
      }

      const property = declaration.slice(0, colonIndex).trim();
      const value = declaration.slice(colonIndex + 1).trim();

      styles[property] = value;
    });

  return styles;
}

module.exports = convertToObject;
