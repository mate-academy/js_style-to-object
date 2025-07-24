'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const finalObject = sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration !== '')
    .reduce((acc, declaration) => {
      const parts = declaration.split(':');

      if (parts.length >= 2) {
        const property = parts[0].trim();
        const value = parts.slice(1).join(':').trim();

        acc[property] = value;
      }

      return acc;
    }, {});

  return finalObject;
}

module.exports = convertToObject;
