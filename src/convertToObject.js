'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */new
function convertToObject(sourceString) {
  const styles = {};
  const declarations = sourceString.split(';');

  for (const declaration of declarations) {
    const parts = declaration.trim().split(':');

    if (parts.length === 2) {
      const key = parts[0].trim();
      const value = parts[1].trim();

      if (key !== '' && value !== '') {
        styles[key] = value;
      }
    }
  }

  return styles;
}

module.exports = convertToObject;
