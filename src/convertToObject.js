'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  if (!sourceString || typeof sourceString !== 'string') {
    return result;
  }

  const declarations = sourceString.split(';');

  for (const decl of declarations) {
    const colonIndex = decl.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const key = decl.slice(0, colonIndex).trim();
    const value = decl.slice(colonIndex + 1).trim();

    if (key) {
      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
