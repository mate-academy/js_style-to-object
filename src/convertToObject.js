'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString || sourceString.trim() === '') {
    return {};
  }

  const result = {};
  const declarations = sourceString.split(';');

  for (const decl of declarations) {
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
