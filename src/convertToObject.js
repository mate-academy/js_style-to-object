'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (typeof sourceString !== 'string' || sourceString.trim() === '') {
    return {};
  }

  const declaration = sourceString
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean);

  const styles = {};

  declaration.forEach((decl) => {
    const idx = decl.indexOf(':');

    if (idx === -1) {
      return;
    }

    const key = decl.slice(0, idx).trim();

    const value = decl.slice(idx + 1).trim();

    if (!key || value === '') {
      return;
    }

    styles[key] = value;
  });

  return styles;
}

module.exports = convertToObject;
