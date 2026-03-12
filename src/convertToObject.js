'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const normalized = (sourceString || '').replace(/\r/g, '').trim();
  const declarations = normalized.split(';');

  const styleObject = declarations
    .map((decl) => decl.trim())
    .filter((part) => part)
    .reduce((acc, part) => {
      const idx = part.indexOf(':');

      if (idx === -1) {
        return acc;
      }

      const key = part.slice(0, idx).trim();
      const value = part.slice(idx + 1).trim();

      if (key) {
        acc[key] = value;
      }
      return acc;
    }, {});

  return styleObject;
}

module.exports = convertToObject;
