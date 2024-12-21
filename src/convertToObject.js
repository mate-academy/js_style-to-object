'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration)
    .forEach((declaration) => {
      const [property, value] = declaration
        .split(':')
        .map((part) => part.trim());

      if (property && value) {
        result[property] = value;
      }
    });

  return result;
}

module.exports = convertToObject;
