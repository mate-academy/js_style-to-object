'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString.split(';');
  const styles = {};

  declarations.forEach((string) => {
    const trimmedDeclaration = string.trim();

    if (trimmedDeclaration.length === 0) {
      return;
    }

    const parts = trimmedDeclaration.split(':', 2);

    if (parts.length >= 2) {
      const key = parts[0].trim();
      const value = parts[1].trim();

      if (key !== '' && value !== '') {
        styles[key] = value;
      }
    }
  });

  return styles;
}

module.exports = convertToObject;
