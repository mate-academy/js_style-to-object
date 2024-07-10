'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString === '') {
    return {};
  }

  const styleArray = sourceString.split(';');
  const obj = {};

  styleArray.forEach((declaration) => {
    const parts = declaration.split(':');

    if (parts.length === 2) {
      const key = parts[0].trim();
      const value = parts[1].trim();

      obj[key] = value;
    }
  });

  return obj;
}

module.exports = convertToObject;
