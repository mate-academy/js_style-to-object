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
    .filter((declaration) => declaration.length > 0)
    .map((declaration) => {
      const [property, value] = declaration
        .split(':')
        .map((part) => part.trim());

      return { [property]: value };
    })
    .reduce((acc, style) => ({ ...acc, ...style }), {});
}

module.exports = convertToObject;
