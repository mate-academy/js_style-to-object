'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const normalized = (sourceString || '').replace(/\r/g, '').trim();

  const declarations = normalized.split(';');

  for (const decl of declarations) {
    const part = decl.trim();
    if (!part) continue;

    const idx = part.indexOf(':');
    if (idx === -1) continue;

    const key = part.slice(0, idx).trim();
    const value = part.slice(idx + 1).trim();

    if (key) {
      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
