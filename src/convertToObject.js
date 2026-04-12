'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean);

  return declarations.reduce((acc, decl) => {
    const idx = decl.indexOf(':');

    if (idx === -1) {
      return acc;
    }

    const key = decl.slice(0, idx).trim();
    const value = decl.slice(idx + 1).trim();

    acc[key] = value;

    return acc;
  }, {});
}

module.exports = convertToObject;
