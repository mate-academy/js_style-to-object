'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  if (!sourceString) {
    return {};
  }

  // Split by semicolon first (which ends a declaration)
  const declarations = sourceString.split(';');

  const result = {};

  for (const declaration of declarations) {
    const trimmedDecl = declaration.trim();

    if (!trimmedDecl) {
      continue;
    } // skip empty parts

    // Split by first colon only to support colons inside values
    const colonIndex = trimmedDecl.indexOf(':');

    if (colonIndex === -1) {
      continue;
    } // invalid declaration, skip

    const key = trimmedDecl.slice(0, colonIndex).trim();
    const value = trimmedDecl.slice(colonIndex + 1).trim();

    if (key) {
      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
