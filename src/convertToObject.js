'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styles) {
  const styleObject = styles
    .split(';')
    .map((decl) => decl.trim())
    .filter((decl) => decl)
    .reduce((acc, decl) => {
      const colonIndex = decl.indexOf(':');

      if (colonIndex === -1) {
        return acc;
      }

      const property = decl.slice(0, colonIndex).trim();
      const value = decl.slice(colonIndex + 1).trim();

      if (property) {
        acc[property] = value;
      }

      return acc;
    }, {});

  return styleObject;
}

module.exports = convertToObject;
