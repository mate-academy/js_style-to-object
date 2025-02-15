'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .trim()
    .split(';')
    .reduce((acc, declaration) => {
      const trimmedDeclaration = declaration.trim();

      if (trimmedDeclaration) {
        const [property, value] = trimmedDeclaration
          .split(':')
          .map((item) => item.trim());

        if (property && value !== undefined) {
          acc[property] = value;
        }
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
