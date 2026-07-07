'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((declaration) => declaration.trim() !== '')
    .reduce((parsedStyles, currentDeclaration) => {
      const [rawKey, rawValue] = currentDeclaration.split(':');
      const key = rawKey.trim();
      const value = rawValue.trim();

      return {
        ...parsedStyles,
        [key]: value,
      };
    }, {});
}

module.exports = convertToObject;
