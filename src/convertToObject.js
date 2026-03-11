'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};

  const declarations = sourceString.split(';');

  for (let decl of declarations) {
    decl = decl.trim();

    if (!decl) {
      continue;
    }

    const parts = decl.split(':');
    const key = parts[0].trim();
    const value = parts[1].trim();

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
