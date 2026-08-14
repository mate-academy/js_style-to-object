'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return Object.fromEntries(
    sourceString
      .split(';')
      .filter((declaration) => declaration.trim())
      .map((declaration) => {
        const [property, value] = declaration.split(':');

        return [property.trim(), value.trim()];
      }),
  );
}

module.exports = convertToObject;
