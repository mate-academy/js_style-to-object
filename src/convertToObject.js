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
      .map((declaration) => declaration.trim())
      .filter(Boolean)
      .map((declaration) => {
        const [key, value] = declaration.split(':').map((part) => part.trim());

        return [key, value];
      }),
  );
}

module.exports = convertToObject;
