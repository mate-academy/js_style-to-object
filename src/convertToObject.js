'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProperties = {};

  if (!sourceString || sourceString.trim() === '') {
    return cssProperties;
  }

  sourceString
    .split(';')
    .filter((decl) => decl.trim() !== '')
    .forEach((decl) => {
      const [key, value] = decl.split(':');

      if (key && value) {
        cssProperties[key.trim()] = value.trim();
      }
    });

  return cssProperties;
}

module.exports = convertToObject;
