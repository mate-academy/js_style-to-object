'use strict';
/**
 * @param {string} sourceString
 * @return {object}
 */

function convertToObject(sourceString) {
  const obj = {};

  const declarations = sourceString
    .split(';')
    .map((d) => d.trim())
    .filter((d) => d);

  for (const decl of declarations) {
    const colonIndex = decl.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const key = decl.slice(0, colonIndex).trim();
    const value = decl.slice(colonIndex + 1).trim();

    obj[key] = value;
  }

  return obj;
}

module.exports = convertToObject;
