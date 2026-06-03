'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  if (!sourceString || sourceString.trim() === '') {
    return result;
  }

  sourceString
    .split(';')
    .filter((decl) => decl.trim() !== '')
    .forEach((decl) => {
      const [key, value] = decl.split(':');

      if (key && value) {
        result[key.trim()] = value.trim();
      }
    });

  return result;
}

module.exports = convertToObject;
