'use strict';

/**
 * @param {string} sourceString
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean);

  const styleMap = declarations.reduce((acc, decl) => {
    const idx = decl.indexOf(':');

    if (idx === -1) {
      return acc;
    }

    const property = decl.slice(0, idx).trim();
    const value = decl.slice(idx + 1).trim();

    if (!property || !value) {
      return acc;
    }

    acc[property] = value;

    return acc;
  }, {});

  return styleMap;
}

module.exports = convertToObject;
