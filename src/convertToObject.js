'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styles) {
  const result = {};
  const declarations = styles.split(';');

  for (let decl of declarations) {
    decl = decl.trim();

    if (!decl) {
      continue;
    }

    const colonIndex = decl.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const property = decl.slice(0, colonIndex).trim();
    const value = decl.slice(colonIndex + 1).trim();

    if (property) {
      result[property] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
