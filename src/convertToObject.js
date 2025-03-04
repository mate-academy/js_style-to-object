'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const declarations = sourceString
    .split(';')
    .map((decl) => decl.trim())
    .filter((decl) => decl.length > 0);

  declarations.forEach((decl) => {
    const colonIndex = decl.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const property = decl.slice(0, colonIndex).trim();
    const value = decl.slice(colonIndex + 1).trim();

    if (property) {
      result[property] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
