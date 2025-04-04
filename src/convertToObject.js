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

  return sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((trimmedDeclaration) => trimmedDeclaration)
    .reduce((styles, declaration) => {
      const [key, value] = declaration.split(':');

      if (key && value) {
        styles[key.trim()] = value.trim();
      }

      return styles;
    }, {});
}

module.exports = convertToObject;
