'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString) {
    return {};
  }

  const result = {};

  // Split declarations by semicolon. This keeps multiline values intact
  // because they end with a semicolon as well.
  const declarations = sourceString.split(';');

  for (const decl of declarations) {
    // Skip empty declarations (extra semicolons or whitespace-only parts)
    if (!decl || decl.trim() === '') {
      continue;
    }

    const colonIndex = decl.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    // Property: normalize spaces around and collapse internal whitespace
    const property = decl.slice(0, colonIndex).replace(/\s+/g, ' ').trim();

    // Value: keep internal spacing and newlines, only trim leading/trailing
    const value = decl.slice(colonIndex + 1).replace(/^\s+|\s+$/g, '');

    if (property) {
      result[property] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
