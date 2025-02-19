'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newString = sourceString;

  return newString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter(Boolean)
    .reduce((acc, declaration) => {
      const [key, value] = declaration.split(':').map((part) => part.trim());

      acc[key] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
