'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
const result = {};

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration) // eliminates newline entries
    .forEach((declaration) => {
      const property = declaration.split(':')[0].trim();
      const value = declaration.split(':')[1].trim();

      if (property && value) {
        result[property] = value;
      }
    });
}

module.exports = convertToObject;
