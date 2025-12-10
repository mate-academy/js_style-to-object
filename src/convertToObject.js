'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString
    .trim()
    .split(';')
    .map((item) => item.trim())
    .filter(Boolean)
    .reduce((acc, decl) => {
      const idx = decl.indexOf(':');

      if (idx === -1) {
        return acc;
      }

      const key = decl.slice(0, idx).trim();
      const value = decl.slice(idx + 1).trim();

      if (!key) {
        return acc;
      }
      acc[key] = value;

      return acc;
    }, {});

  return declarations;
}

module.exports = convertToObject;
