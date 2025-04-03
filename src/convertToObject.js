'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString) {
    return {};
  }

  const styles = {};
  const declarations = sourceString.split(';');

  for (const declaration of declarations) {
    const trimmedDeclaration = declaration.trim();

    if (trimmedDeclaration) {
      const [key, value] = trimmedDeclaration.split(':');

      if (key && value) {
        const trimmedKey = key.trim();
        const trimmedValue = value.trim();

        styles[trimmedKey] = trimmedValue;
      }
    }
  }

  return styles;
}

module.exports = convertToObject;
