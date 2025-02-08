'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration)
    .reduce((acc, declaration) => {
      const [property, value] = declaration
        .split(':')
        .map((item) => item.trim());

      if (property && value) {
        acc[property] = value;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
