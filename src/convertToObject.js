'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const normalizedSource = sourceString || '';

  return normalizedSource.split(';').reduce((styles, declaration) => {
    const cleanDeclaration = declaration.trim();

    if (!cleanDeclaration) {
      return styles;
    }

    const separatorIndex = cleanDeclaration.indexOf(':');

    if (separatorIndex === -1) {
      return styles;
    }

    const property = cleanDeclaration.slice(0, separatorIndex).trim();
    const value = cleanDeclaration.slice(separatorIndex + 1).trim();

    if (!property || !value) {
      return styles;
    }

    return {
      ...styles,
      [property]: value,
    };
  }, {});
}

module.exports = convertToObject;
